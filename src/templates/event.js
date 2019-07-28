import React from 'react';
import { graphql } from 'gatsby';
import getByPath from 'lodash/get';
import contentParser from 'gatsby-wpgraphql-inline-images';

import SiteLayout from '../components/layout';
import Seo from '../components/layout-seo';
import PostContent from '../components/post-content';

const Event = props => {
  const {
    location,
    data: {
      wpgraphql: { event, menuItems },
    },
    pageContext: { wordPressUrl, uploadsUrl },
  } = props;

  const { title } = event;
  const menus = getByPath(menuItems, 'edges', []);

  return (
    <SiteLayout location={location} menus={menus}>
      <Seo title={event.title} description={event.excerpt} />
      <PostContent
        title={title}
        content={contentParser(event, { wordPressUrl, uploadsUrl })}
        post={event}
      />
    </SiteLayout>
  );
};

export default Event;

export const eventQuery = graphql`
  query GET_EVENT($id: ID!, $menuLocation: WPGraphQL_MenuLocationEnum!) {
    wpgraphql {
      event(id: $id) {
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
