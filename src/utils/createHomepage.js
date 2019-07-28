module.exports = async (
  { actions, graphql },
  { wordPressUrl, uploadsUrl, mainMenuSlug }
) => {
  const { createPage } = actions;

  const homeTemplate = require.resolve(`../templates/homepage.js`);

  console.log(`create homepage`);
  createPage({
    path: `/`,
    component: homeTemplate,
    context: {
      wordPressUrl,
      uploadsUrl,
      menuLocation: mainMenuSlug,
    },
  });
};
