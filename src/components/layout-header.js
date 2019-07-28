/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Header as ThemeHeader, Container } from 'theme-ui';
import MainMenu from './layout-menu';

const Header = ({ children, ...props }) => {
  const { homepage: isHomepage } = props;
  const sxExtra = {};
  if (isHomepage) {
    sxExtra.maxWidth = 'homepage';
  }
  return (
    <ThemeHeader>
      <Container
        sx={{
          maxWidth: `main`,
          py: 1,
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          flexDirection: ['column', 'column', 'row'],
          ...sxExtra,
        }}
      >
        <MainMenu {...props}></MainMenu>
      </Container>
    </ThemeHeader>
  );
};

export default Header;

