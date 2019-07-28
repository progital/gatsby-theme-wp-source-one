/** @jsx jsx */
import { jsx, Layout as ThemeLayout, Main, Container } from 'theme-ui';
import Header from './layout-header';
import Footer from './layout-footer';
import useSiteMetadata from '../hooks/use-site-metadata';
import GlobalStyles from './layout-styles';

export default ({ children, ...props }) => {
  const siteMetadata = useSiteMetadata();
  const { social: socialLinks } = siteMetadata;
  const { widen } = props;
  const sxExtra = {};
  if (widen) {
    sxExtra.width = widen;
  }

  return (
    <ThemeLayout>
      <GlobalStyles />
      <Header {...props} />
      <Main sx={{ ...sxExtra }}>
        <Container>{children}</Container>
      </Main>
      <Footer socialLinks={socialLinks} {...props} />
    </ThemeLayout>
  );
};
