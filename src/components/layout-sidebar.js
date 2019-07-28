/** @jsx jsx */
import { jsx } from 'theme-ui';
import Bio from './side-bio';

const Sidebar = props => {
  return (
    <aside
      sx={{
        display: 'flex',
        width: '300px',
        maxWidth: '100%',
        flex: ['1 0 auto', '1 0 auto', '1 0 300px'],
        mt: 4,
        mx: 'auto',
        ml: ['auto', 'auto', 3],
        py: 4,
        px: 3,
        border: '1px solid #979797',
        backgroundColor: '#f8f8f8',
        position: ['static', 'static', 'sticky'],
        top: 2,
      }}
    >
      <Bio />
    </aside>
  );
};

export default Sidebar;
