/** @jsx jsx */
import { Styled, Flex, jsx } from 'theme-ui';
import Img from 'gatsby-image';

const PostContentTitle = ({ title, post }) => {
  const titleOverlay = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    AlignItems: 'center',
    h1: {
      variant: 'styles.h1',
      mx: 'auto',
      my: 'auto',
      minWidth: '250px',
      p: 4,
      backgroundColor: 'bgWhiteSemi',
      textAlign: 'center',
    },
  };

  const image = post.featuredImage;
  const isRegular = image && image.isRegular;
  let fluidData;
  if (!isRegular) {
    fluidData = image && JSON.parse(image.content);
  }
  if (isRegular) {
    fluidData = image && image.content;
  }

  if (!image) {
    return <Styled.h1>{title}</Styled.h1>;
  }

  return (
    <Flex
      sx={{
        position: 'relative',
        maxHeight: '450px',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        '.gatsby-image-wrapper': {
          height: '100%',
          width: '100%',
        },
        mb: 4,
      }}
    >
      <Img fluid={fluidData} />
      <Flex sx={{ ...titleOverlay }}>
        <h1>{title}</h1>
      </Flex>
    </Flex>
  );
};

export default PostContentTitle;
