/** @jsx jsx */
import { jsx } from 'theme-ui';
import PostContentTitle from './post-content-title';

const PostContent = ({ content, title, post, sx, ...props }) => (
  <div sx={sx}>
    <PostContentTitle title={title} post={post} />
    <div sx={{ variant: 'styles.SourcedContent' }}>{content}</div>
  </div>
);

export default PostContent;
