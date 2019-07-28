/** @jsx jsx */
import { jsx, Styled } from 'theme-ui';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/layout-seo';
import PostsList from '../components/posts-list';
import getByPath from 'lodash/get';

const BlogIndex = props => {
  const {
    data: {
      wpgraphql: { category, menuItems },
    },
    location,
  } = props;

  const { posts } = category;
  const menus = getByPath(menuItems, 'edges', []);

  const title = `Category: ${category.name}`;

  return (
    <Layout location={location} menus={menus}>
      <Seo title={title} />
      <Styled.h1>{title}</Styled.h1>
      <div>{posts && <PostsList posts={posts.nodes} />}</div>
    </Layout>
  );
};

export default BlogIndex;

export const query = graphql`
  query GET_CATEGORY($id: ID!, $menuLocation: WPGraphQL_MenuLocationEnum!) {
    wpgraphql {
      category(id: $id) {
        id
        name
        slug
        posts {
          nodes {
            ...PostEntryFragment
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
