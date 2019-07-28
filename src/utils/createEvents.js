module.exports = async (
  { actions, graphql },
  { wordPressUrl, uploadsUrl, mainMenuSlug }
) => {
  const GET_EVENTS = `
  query GET_EVENTS($first:Int $after:String){
    wpgraphql {
      events(
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
    await graphql(GET_EVENTS, variables).then(async ({ data }) => {
      const {
        wpgraphql: {
          events: {
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

  await fetchPages({ first: 100, after: null }).then(allPages => {
    const pageTemplate = require.resolve(`../templates/event.js`);

    allPages.map(page => {
      console.log(`create event page: ${page.uri}`);
      createPage({
        path: `/event/${page.uri}`,
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
