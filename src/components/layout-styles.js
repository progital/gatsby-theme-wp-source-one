import React from 'react';
import { Global } from '@emotion/core';

// Global styles added to each page

const GlobalStyles = props => {
  return (
    <Global
      styles={{
        ...(props.styles || {}),
        html: {
          boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
          boxSizing: 'inherit',
        },
        body: {
          margin: 0,
          padding: 0,
        },
      }}
    />
  );
};

export default GlobalStyles;
