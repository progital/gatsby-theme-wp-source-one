// base theme

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  color: 'heading',
  padding: 0,
  margin: 0,
  marginBottom: 3,
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  textTransform: 'uppercase',
};

export default {
  breakpoints: ['576px', '992px', '1200px'],
  sizes: {
    max: '100%',
    main: 1024,
    homepage: 1184,
  },
  space: [0, 5.75, 11.5, 23, 46, 92, 184],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 21, 24, 32, 36, 48],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#07c',
    secondary: '#30c',
    accent: '#90C',
    muted: '#f6f6f6',
  },
  styles: {
    img: {
      padding: 0,
      margin: 0,
      mb: 3,
      maxWidth: '100%',
    },
    a: {
      color: `inherit`,
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 3,
    },
    h3: {
      ...heading,
      fontSize: 2,
    },
    h4: {
      ...heading,
      fontSize: 1,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
    ul: {
      padding: 0,
      margin: 0,
      mb: 3,
      listStyle: 'none',
      listStylePosition: 'outside',
      listStyleImage: 'none',
      ml: 3,
    },
    ol: {
      padding: 0,
      margin: 0,
      marginBottom: 3,
      listStylePosition: 'outside',
      listStyleImage: 'none',
      ml: 3,
    },
    li: {
      mb: 2,
      pl: 0,
      ol: 2,
      ul: 2,
      p: 1,
      '&:focus-within,&:hover': {
        backgroundColor: 'gray.0',
      },
    },
    p: {
      padding: 0,
      margin: 0,
      marginBottom: 3,
      code: {
        fontSize: `inherit`,
      },
    },
    table: {
      padding: 0,
      margin: 0,
      marginBottom: 3,
      borderCollapse: 'collapse',
      width: '100%',
    },
    th: {
      textAlign: 'left',
      borderBottom: '1px solid',
      px: 2,
      py: 1,
      '&:first-child': 1,
      '&:last-child': 1,
    },
    td: {
      textAlign: 'left',
      borderBottom: '1px solid',
      px: 2,
      py: 1,
      mt: '-1px',
      '&:first-child': 1,
      '&:last-child': 1,
    },
    blockquote: {
      padding: 0,
      margin: 0,
      marginBottom: 3,
      mx: 3,
      color: `inherit`,
      borderLeftColor: `inherit`,
      opacity: 0.8,
      '&.translation': {
        fontSize: `1em`,
      },
    },
    hr: {
      width: 'max',
      padding: 0,
      margin: 0,
      color: `muted`,
      mb: 3,
    },
    b: { fontWeight: 'bold' },
    strong: { fontWeight: 'bold' },
    pre: {
      padding: 3,
      margin: 0,
      marginBottom: 3,
      fontSize: '85%',
      fontFamily: `monospace`,
      hyphens: `none`,
      overflow: `auto`,
    },
    code: {
      fontFamily: `monospace`,
      fontSize: '85%',
    },
  },
};
