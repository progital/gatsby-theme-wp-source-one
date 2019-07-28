/** @jsx jsx */
import { jsx, Flex } from 'theme-ui';
import { graphql } from 'gatsby';
import HomepageLayout from '../components/layout-homepage';
import Seo from '../components/layout-seo';
import PostsList from '../components/posts-list';
import getByPath from 'lodash/get';
import useSiteMetadata from '../hooks/use-site-metadata';
import useAllImages from '../hooks/use-image-files';
import queryLocalImage from '../utils/queryLocalImage';
import PostContent from '../components/post-content';
import Sidebar from '../components/layout-sidebar';

const BlogIndex = props => {
  const {
    data: {
      wpgraphql: { posts, menuItems },
    },
    location,
  } = props;

  const menus = getByPath(menuItems, 'edges', []);
  const siteMetadata = useSiteMetadata();
  const { themeOptions } = siteMetadata;
  const allImages = useAllImages();
  const heroImage = queryLocalImage(themeOptions.homepageHeroImage, allImages);

  let post = { content: '' };
  if (heroImage) {
    post.featuredImage = {
      content: heroImage,
      isRegular: true,
    };
  }

  return (
    <HomepageLayout location={location} menus={menus}>
      <Seo title={siteMetadata.title} />
      <PostContent title={siteMetadata.title} content={''} post={post} />
      <Flex
        sx={{
          width: '100%',
          flexDirection: ['column', 'column', 'row'],
          alignItems: 'flex-start',
        }}
      >
        <div
          sx={{
            mt: 4,
            maxWidth: '100%',
            width: '100%',
            flex: '1 1 auto',
          }}
        >
          {posts && <PostsList posts={posts.nodes} />}
        </div>
        <Sidebar />
      </Flex>
    </HomepageLayout>
  );
};

export default BlogIndex;

export const query = graphql`
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    excerpt
    categories {
      nodes {
        count
        name
        slug
      }
    }
    author {
      name
      slug
    }
    featuredImage {
      srcSet
      sourceUrl
      content
    }
  }

  query GET_POSTS($menuLocation: WPGraphQL_MenuLocationEnum!) {
    wpgraphql {
      posts {
        nodes {
          ...PostEntryFragment
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
