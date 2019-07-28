/** @jsx jsx */
import { jsx, Layout as ThemeLayout, Main, Container } from 'theme-ui';
import Header from './layout-header';
import Footer from './layout-footer';
import useSiteMetadata from '../hooks/use-site-metadata';
import GlobalStyles from './layout-styles';

export default ({ children, ...props }) => {
  const siteMetadata = useSiteMetadata();
  const { social: socialLinks } = siteMetadata;
  props.homepage = true;

  return (
    <ThemeLayout>
      <GlobalStyles />
      <Header {...props} />
      <Main>
        <Container sx={{ maxWidth: 'homepage' }}>{children}</Container>
      </Main>
      <Footer socialLinks={socialLinks} {...props} />
    </ThemeLayout>
  );
};
