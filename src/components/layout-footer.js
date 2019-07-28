/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Styled, css, Footer as ThemeFooter, Container } from 'theme-ui';

const Footer = ({ socialLinks, ...props }) => {
  const { homepage: isHomepage } = props;
  const sxExtra = {};
  const sxBottomMenu = {};
  if (isHomepage) {
    sxExtra.maxWidth = 'homepage';
    sxBottomMenu.marginRight = ['auto', 'auto', '323px'];
    sxBottomMenu.marginLeft = ['auto', 'auto', '0'];
  }

  return (
    <ThemeFooter
      css={css({
        mt: 4,
      })}
    >
      <Container
        sx={{
          maxWidth: `main`,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          ...sxExtra,
        }}
      >
        <div
          sx={{
            maxWidth: `max`,
            width: `max`,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...sxBottomMenu,
          }}
        >
          {socialLinks &&
            socialLinks.map((platform, i, arr) => (
              <Styled.a
                key={platform.url}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  variant: 'styles.BottomMenuItem',
                }}
              >
                {platform.name}
              </Styled.a>
            ))}
        </div>
      </Container>
    </ThemeFooter>
  );
};

export default Footer;
