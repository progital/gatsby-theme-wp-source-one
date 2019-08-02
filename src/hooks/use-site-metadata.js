/**
 * component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          social {
            name
            url
          }
          themeOptions {
            wordPressUrl
            wpqlTypeName
            graphqlUrl
            uploadsUrl
            processPostTypes
            mainMenuSlug
            homepageHeroImage
            bioAvatarImage
            indexPageSize
            generateWebp
          }
        }
      }
    }
  `);

  if (data.errors) {
    console.log('siteMetadata not defined');
    return {};
  }

  return data.site.siteMetadata;
};

export default useSiteMetadata;
