import React from 'react';
import { graphql } from 'gatsby';
import getByPath from 'lodash/get';

import contentParser from 'gatsby-wpgraphql-inline-images';
import SiteLayout from '../components/layout';
import Seo from '../components/layout-seo';
import PostContent from '../components/post-content';

const Page = props => {
  const {
    location,
    data: {
      wpgraphql: { page, menuItems },
    },
    pageContext: { wordPressUrl, uploadsUrl },
  } = props;
  const { title } = page;

  const content = contentParser(page, { wordPressUrl, uploadsUrl });
  const menus = getByPath(menuItems, 'edges', []);

  return (
    <SiteLayout location={location} menus={menus}>
      <Seo title={page.title} description={page.excerpt} />
      <PostContent title={title} content={content} post={page} />
    </SiteLayout>
  );
};

export default Page;

export const pageQuery = graphql`
  query GET_PAGE($id: ID!, $menuLocation: WPGraphQL_MenuLocationEnum!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
        featuredImage {
          srcSet
          sourceUrl
          content
        }
      }
      menuItems(where: { location: $menuLocation }) {
        edges {
          node {
            label
            url
          }
        }
      }
    }
  }
`;
