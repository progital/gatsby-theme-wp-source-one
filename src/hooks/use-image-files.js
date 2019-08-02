/**
 * component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from 'gatsby';

const useImageFiles = () => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: {
          extension: { regex: "/jpeg|jpg|png|gif/" }
          sourceInstanceName: { eq: "images" }
        }
      ) {
        edges {
          node {
            name
            extension
            relativePath
            childImageSharp {
              fluid(maxWidth: 1380) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  if (data.errors) {
    console.log('allFile query failed not defined');
    return [];
  }

  return data.images.edges;
};

export default useImageFiles;
