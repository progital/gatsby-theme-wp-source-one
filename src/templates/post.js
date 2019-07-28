import React from 'react';
import { graphql } from 'gatsby';
import getByPath from 'lodash/get';
import contentParser from 'gatsby-wpgraphql-inline-images';

import SiteLayout from '../components/layout';
import Seo from '../components/layout-seo';
import PostContent from '../components/post-content';

const Post = props => {
  const {
    location,
    data: {
      wpgraphql: { post, menuItems },
    },
    pageContext: { wordPressUrl, uploadsUrl },
  } = props;
  const { title } = post;

  const content = contentParser(post, { wordPressUrl, uploadsUrl });
  const menus = getByPath(menuItems, 'edges', []);

  return (
    <SiteLayout location={location} menus={menus}>
      <Seo title={post.title} description={post.excerpt} />
      <PostContent title={title} content={content} post={post} />
    </SiteLayout>
  );
};

export default Post;

export const postQuery = graphql`
  query GET_POST($id: ID!, $menuLocation: WPGraphQL_MenuLocationEnum!) {
    wpgraphql {
      post(id: $id) {
        title
        content
        excerpt
        uri
        featuredImage {
          srcSet
          sourceUrl
          content
        }
        categories {
          nodes {
            count
            name
            slug
          }
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
