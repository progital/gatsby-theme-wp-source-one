/** @jsx jsx */
import { jsx, Styled, Flex } from 'theme-ui';
import Image from 'gatsby-image';

import useSiteMetadata from '../hooks/use-site-metadata';
import useAllImages from '../hooks/use-image-files';
import queryLocalImage from '../utils/queryLocalImage';

// Shadow this component to display your bio
const Bio = () => {
  const siteMetadata = useSiteMetadata();
  const author = siteMetadata.author;
  const { themeOptions } = siteMetadata;
  const allImages = useAllImages();
  const avatar = queryLocalImage(themeOptions.bioAvatarImage, allImages);

  // way of emulating fixed image size with `fluid` data
  if (avatar) {
    avatar.sizes = '300px';
  }

  return (
    <Flex
      sx={{
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <Styled.h4>About me</Styled.h4>
      <div sx={{ mb: 0, width: 'max' }}>
        <Flex
          sx={{
            width: '150px',
            height: '150px',
            float: 'left',
            overflow: 'hidden',
            alignItems: 'center',
            justifyContent: 'center',
            '.gatsby-image-wrapper': {
              height: '100%',
              width: '100%',
            },
            m: 0,
            mr: 2,
            mb: 2,
          }}
        >
          {avatar && <Image fluid={avatar} alt={author} />}
        </Flex>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a nisi
          sed nunc sollicitudin sagittis vel sed tortor. Sed quis ipsum lacinia,
          condimentum eros sed, bibendum mi. Morbi pellentesque, velit quis
          tincidunt pulvinar, ante mi lobortis erat, sit amet aliquet quam metus
          sed magna. Praesent blandit quis nunc eu porta.
        </p>
      </div>
    </Flex>
  );
};

export default Bio;
