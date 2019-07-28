let headings = {};
for (let num = 1; num <= 6; num++) {
  headings[`h${num}`] = { variant: `styles.h${num}` };
}

export default {
  root: {
    fontFamily: 'body',
    fontSize: 1,
    fontWeight: 'body',
    lineHeight: 'body',
  },
  h1: {
    fontSize: 4,
    textTransform: 'uppercase',
    fontWeight: 'normal',
  },

  SourcedImage: {
    variant: 'styles.img',
    mx: 'auto',
  },
  SourcedContent: {
    p: {
      variant: 'styles.p',
      color: 'text',
    },
    a: {
      variant: 'styles.a',
    },
    '.gallery': {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      ml: '-23px',
      mr: '-23px',
    },

    '.gallery-item': {
      mx: 3,
      my: 3,
    },
    ...headings,
  },
  CategoryItem: {
    textDecoration: `none`,
    color: `text`,
    '&:hover': {
      color: 'primary',
    },
    '&:not(:last-child)': {
      mr: 1,
    },
    '&:not(:last-child):after': {
      content: '" ~ "',
      ml: 1,
    },
  },
  MainMenuItem: {
    textDecoration: `none`,
    color: `text`,
    textTransform: 'uppercase',
    fontWeight: 'normal',
    fontSize: 0,
    letterSpacing: '1px',
    py: 2,
    px: 3,
    '&:hover': {
      color: 'accent',
    },
    '&:last-child': {
      pr: [3, 3, 0],
    },
  },
  BottomMenuItem: {
    textDecoration: 'none',
    '&:not(:last-child):after': {
      content: '"\\2022"',
      color: 'text',
      fontSize: '80%',
      mx: 1,
    },
  },
  Layout: {
    color: 'text',
    fontFamily: 'body',
    fontSize: 1,
    lineHeight: 'body',
  },
  Header: {
    fontFamily: 'body',
    fontSize: 0,
    backgroundColor: 'transparent',
    color: 'text',
    margin: 0,
    px: 3,
    py: 3,
    maxWidth: 'max',
    width: 'max',
    display: 'flex',
    flexDirection: 'column',
  },
  Footer: {
    margin: '0 auto',
    px: 3,
    py: 3,
    maxWidth: 'max',
    width: 'max',
  },
  Main: {
    margin: '0 auto',
    maxWidth: 'max',
    width: 'max',
  },
  Container: {
    maxWidth: `main`,
    width: `max`,
    mx: `auto`,
    px: 3,
    py: 1,
  },
};
