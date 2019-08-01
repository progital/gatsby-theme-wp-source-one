/** @jsx jsx */
import { Styled, Flex, jsx } from 'theme-ui';
import { Link } from 'gatsby';
// import parser from 'html-react-parser';
import Img from 'gatsby-image';
import moment from 'moment';
import getByPath from 'lodash/get';
import striptags from 'striptags';

const PostEntry = ({ post, title, urlPrefix = '' }) => {
  const imageStyle = {
    width: ['100%', '100%', '290px'],
    height: ['250px', '290px', '290px'],
    flex: ['0 0 100%', '0 0 100%', '0 0 290px'],
    mr: 3,
    mb: 1,
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '.gatsby-image-wrapper': {
      height: '100%',
      width: '100%',
    },
  };

  const excerpt = striptags(post.excerpt);
  const image = post.featuredImage;
  const fluidData = image && JSON.parse(image.content);
  const categories = getByPath(post, 'categories.nodes', []).filter(
    ({ slug }) => slug !== 'uncategorized'
  );

  // way of emulating fixed image size with `fluid` data
  if (fluidData) {
    fluidData.sizes = '700px';
  }

  return (
    <Flex sx={{ flexDirection: 'column' }}>
      <Flex sx={{ flexDirection: ['column', 'column', 'row'] }}>
        {image && (
          <div sx={{ ...imageStyle }}>
            <Img fluid={fluidData} />
          </div>
        )}
        <div sx={{ mt: [3, 3, 0] }}>
          {!!categories.length && (
            <div
              sx={{
                fontSize: 0,
                fontStyle: 'italic',
                a: { variant: 'styles.CategoryItem' },
                mb: 2,
              }}
            >
              {categories
                .filter(({ slug }) => slug !== 'uncategorized')
                .map(({ name, slug }, key) => {
                  return (
                    <Styled.a
                      as={Link}
                      to={`/blog/category/${slug}`}
                      rel="category"
                      key={key}
                    >
                      {name}
                    </Styled.a>
                  );
                })}
            </div>
          )}
          <Styled.h2 sx={{ fontSize: 2 }}>
            <Styled.a
              as={Link}
              to={`${urlPrefix}/${post.slug}`}
              sx={{
                lineHeight: 'heading',
                mb: 1,
                fontSize: 2,
                textTransform: 'uppercase',
                fontWeight: 'normal',
              }}
            >
              {title}
            </Styled.a>
          </Styled.h2>
          <Styled.p dangerouslySetInnerHTML={{ __html: excerpt }} />
          <small>{moment(post.date).format('MMMM Do, YYYY')}</small>
        </div>
      </Flex>
      <hr
        sx={{
          width: 'max',
          my: 4,
          mx: 'auto',
          border: 'none',
          borderBottom: `1px solid`,
          borderColor: 'muted',
          maxWidth: 'max',
        }}
      />
    </Flex>
  );
};

export default PostEntry;

