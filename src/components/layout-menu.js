/** @jsx jsx */
import { jsx } from 'theme-ui';
import React from 'react';
import { Link } from 'gatsby';
import { Styled } from 'theme-ui';
import URIParser from 'urijs';

const MainMenu = ({ location, menus = [], ...props }) => {
  menus = prepareMenus(menus);

  const { widen } = props;
  const sxExtra = {};
  if (widen) {
    sxExtra.maxWidth = widen;
  }

  return (
    <>
      {menus.map(({ label, url }, key) => {
        return (
          <Styled.a
            key={key}
            as={Link}
            sx={{
              variant: 'styles.MainMenuItem',
            }}
            to={url}
          >
            {label}
          </Styled.a>
        );
      })}
    </>
  );
};

const prepareMenus = menus => {
  // unwraps node objects
  // makes urls relative
  menus = menus.map(({ node }) => {
    let url = new URIParser(node.url);
    node.url = url.path();

    return node;
  });

  // adds home menu if no root link found
  if (!menus.find(item => item.url === '/')) {
    menus.unshift({ label: 'Home', url: '/' });
  }

  return menus;
};

export default MainMenu;
