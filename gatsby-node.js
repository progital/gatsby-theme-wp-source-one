const createHomepage = require(`./src/utils/createHomepage`);
const createPosts = require(`./src/utils/createPosts`);
const createPages = require(`./src/utils/createPages`);
const createCategories = require(`./src/utils/createCategories`);
const prepareThemeOptions = require('./src/utils/prepareThemeOptions');

exports.createPages = async (params, pluginOptions) => {
  // does the same processing as in gatsby-config.js
  const themeOptions = prepareThemeOptions(pluginOptions);

  await createHomepage(params, themeOptions);
  await createPosts(params, themeOptions);
  await createPages(params, themeOptions);
  await createCategories(params, themeOptions);
};

