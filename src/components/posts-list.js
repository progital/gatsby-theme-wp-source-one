import React, { Fragment, useState, useRef } from 'react';
import { Flex } from 'theme-ui';

import PostEntry from './post-list-entry';
import PostsListPaging from './posts-list-paging';
import useSiteMetadata from '../hooks/use-site-metadata';

const scrollToRef = ref =>
  window.scrollTo({
    top: ref.current.offsetTop - 50,
    left: 0,
    behavior: 'smooth',
  });

const usePaged = (pageNum, maxPage, posts) => {
  const siteMetadata = useSiteMetadata();
  // number of posts on one page
  const pageSize = siteMetadata.themeOptions.indexPageSize;

  const selectPages = (num, posts) => {
    if (num > maxPage) {
      return [];
    }

    return posts.slice((num - 1) * pageSize, num * pageSize);
  };

  const ref = useRef();
  ref.current = selectPages(pageNum, posts);

  return ref.current;
};

const PostsList = ({ posts }) => {
  const siteMetadata = useSiteMetadata();
  // number of posts on one page
  const pageSize = siteMetadata.themeOptions.indexPageSize;
  const maxPage = Math.ceil(posts.length / pageSize);

  const [currentPage, setCurrentPage] = useState(1);
  const paged = usePaged(currentPage, maxPage, posts);

  const topRef = useRef(null);
  const scrollToTop = () => scrollToRef(topRef);

  const updatePage = num => {
    setCurrentPage(num);
    scrollToTop();
  };

  return (
    <div ref={topRef}>
      {paged &&
        paged.map(node => {
          const title = node.title || node.slug;
          return (
            <PostEntry
              key={node.id}
              title={title}
              post={node}
              urlPrefix="/blog"
            />
          );
        })}
      <Flex>
        <PostsListPaging
          page={currentPage}
          maxPage={maxPage}
          setPage={updatePage}
        />
      </Flex>
    </div>
  );
};

export default PostsList;
