/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from 'theme-ui';

const PostsListPaging = ({ page, maxPage, setPage }) => {
  const buttonStyle = {
    backgroundColor: 'transparent',
    fontFamily: 'inherit',
    fontWeight: 'normal',
    fontSize: 1,
    lineHeight: '1.15',
    textTransform: 'none',
    mx: 1,
    my: 0,
    p: 2,
    border: 'none',
    cursor: 'pointer',
  };

  const disabledStyle = {
    ...buttonStyle,
    cursor: 'default',
  };

  const activeStyle = {
    ...buttonStyle,
    fontWeight: 'bold',
  };

  let pages = [1, page - 1, page, page + 1, maxPage];
  // unique values
  pages = pages.filter(
    (value, index, self) =>
      self.indexOf(value) === index && value <= maxPage && value >= 1
  );
  let allPageLabels = [];
  pages.forEach((item, index, self) => {
    if (self[index - 1] && self[index - 1] !== item - 1) {
      allPageLabels.push({ label: '...', styles: disabledStyle });
    }
    allPageLabels.push({ label: item, styles: buttonStyle, clickable: true });
  });

  const clickedPage = num => {
    setPage(num);
  };

  return (
    <nav sx={{ display: 'flex', mx: 'auto' }}>
      {allPageLabels.length > 1 &&
        allPageLabels.map(({ label: item, styles, clickable }, index) => {
          return (
            <Fragment key={index}>
              <button
                type={'button'}
                sx={page === item ? { ...activeStyle } : { ...styles }}
                onClick={clickable ? () => clickedPage(item) : null}
              >
                {item}
              </button>
            </Fragment>
          );
        })}
    </nav>
  );
};

export default PostsListPaging;
