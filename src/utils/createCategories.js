module.exports = async (
  { actions, graphql },
  { wordPressUrl, uploadsUrl, mainMenuSlug }
) => {
  const GET_CATEGORIES = `
  query GET_CATEGORIES($first: Int) {
    wpgraphql {
      categories(first: $first) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          categoryId
          slug
        }
      }
    }
  }
  `;
  const { createPage } = actions;
  const allTags = [];
  const fetchTags = async variables =>
    await graphql(GET_CATEGORIES, variables).then(({ data }) => {
      const {
        wpgraphql: {
          categories: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data;
      nodes.map(category => {
        allTags.push(category);
      });
      if (hasNextPage) {
        return fetchTags({ first: variables.first, after: endCursor });
      }
      return allTags;
    });

  await fetchTags({ first: 100, after: null }).then(allTags => {
    const categoryTemplate = require.resolve(`../templates/category.js`);

    allTags.map(category => {
      // skips uncategorized category
      if (category.slug === 'uncategorized') {
        return;
      }

      console.log(`create category: ${category.slug}`);
      createPage({
        path: `/blog/category/${category.slug}`,
        component: categoryTemplate,
        context: {
          ...category,
          menuLocation: mainMenuSlug,
        },
      });
    });
  });
};
