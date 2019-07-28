const URIParser = require('urijs');

// normalizes passed options and constants into themeOptions object
const prepareThemeOptions = options => {
  // constants
  const wpqlTypeName = 'WPGraphQL';
  // no trailing slash please
  // not used
  const blogPath = '/blog';

  // posts index page size
  const indexPageSize = 4;
  // static images
  const homepageHeroImage = 'builtin/homepage-hero.jpg';
  const bioAvatarImage = 'builtin/bio-avatar.jpg';

  const processPostTypes = options.processPostTypes || ['Page', 'Post'];
  // this one needs to be capitalized
  const mainMenuSlug = options.menuLocation || 'MENU_1';
  const wordPressUrl = new URIParser(options.wordPressUrl).normalize();
  // if not defined the default uploads folder is used
  let uploadsUrl = new URIParser(
    options.uploadsUrl || '/wp-content/uploads/'
  ).normalize();

  // uploadsUrl could be given as relative
  if (uploadsUrl.is('relative')) {
    let absUrl = uploadsUrl.absoluteTo(wordPressUrl.href());
    uploadsUrl = absUrl.clone();
  }

  const graphqlUrl = new URL('/graphql', wordPressUrl.href());

  return {
    graphqlUrl: graphqlUrl.href,
    wordPressUrl: wordPressUrl.href(),
    uploadsUrl: uploadsUrl.href(),
    processPostTypes,
    wpqlTypeName,
    blogPath,
    mainMenuSlug,
    homepageHeroImage,
    bioAvatarImage,
    indexPageSize,
  };
};

module.exports = prepareThemeOptions;
