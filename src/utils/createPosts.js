module.exports = async (
  { actions, graphql },
  { wordPressUrl, uploadsUrl, mainMenuSlug }
) => {
  const GET_POSTS = `
  query GET_POSTS($first:Int $after:String){
    wpgraphql {
      posts(
        first: $first
        after:$after
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          postId
          title
        }
      }
    }
  }
  `;

  const { createPage } = actions;
  const allPosts = [];

  const fetchPosts = async variables =>
    await graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data;

      nodes.map(post => {
        allPosts.push(post);
      });

      if (hasNextPage) {
        return fetchPosts({ first: variables.first, after: endCursor });
      }
      return allPosts;
    });

  await fetchPosts({ first: 100, after: null }).then(async allPosts => {
    const postTemplate = require.resolve(`../templates/post.js`);

    allPosts.map(post => {
      console.log(`create post: ${post.uri}`);
      createPage({
        path: `/blog/${post.uri}/`,
        component: postTemplate,
        context: {
          ...post,
          wordPressUrl,
          uploadsUrl,
          menuLocation: mainMenuSlug,
        },
      });
    });
  });
};
