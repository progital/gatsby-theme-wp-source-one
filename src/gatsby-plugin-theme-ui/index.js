import merge from 'lodash/merge';
import baseTheme from './theme';
import colors from './colors';
import styles from './component-styles';

import 'typeface-montserrat';
import 'typeface-lato';
import 'typeface-crimson-text';

export default merge({}, baseTheme, {
  colors,
  fonts: {
    body: 'Lato, system-ui, sans-serif',
    heading: `Montserrat, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
  styles,
});
