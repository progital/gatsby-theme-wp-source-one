module.exports = async (
  { actions, graphql },
  { wordPressUrl, uploadsUrl, mainMenuSlug }
) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int $after:String){
    wpgraphql {
      pages(
        first: $first
        after: $after
        where: {
          parent: null
        }
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          title
        }
      }
    }
  }
  `;

  const { createPage } = actions;
  const allPages = [];

  const fetchPages = async variables =>
    await graphql(GET_PAGES, variables).then(async ({ data }) => {
      const {
        wpgraphql: {
          pages: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data;

      nodes.map(page => {
        allPages.push(page);
      });

      if (hasNextPage) {
        return fetchPages({ first: variables.first, after: endCursor });
      }

      return allPages;
    });

  await fetchPages({ first: 100, after: null }).then(async allPages => {
    const pageTemplate = require.resolve(`../templates/page.js`);

    allPages.map(page => {
      console.log(`create page: ${page.uri}`);
      createPage({
        path: `/${page.uri}`,
        component: pageTemplate,
        context: {
          ...page,
          wordPressUrl,
          uploadsUrl,
          menuLocation: mainMenuSlug,
        },
      });
    });
  });
};
