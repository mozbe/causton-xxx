import { useResetRecoilState } from 'recoil';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Skeleton from '@mui/material/Skeleton';
/* *** */
import { sidebarState, Sidebar as SidebarProps } from '@state/sidebar';
import EditForm from '@components/EditForm';

const Sidebar = ({ active, current }: SidebarProps) => {
  const resetSidebarState = useResetRecoilState(sidebarState);

  function closeDrawer() {
    resetSidebarState();
  }

  const element = current
    ? <EditForm current={current} onClose={closeDrawer} />
    : <Skeleton animation="wave" />
  ;

  return (
    <Drawer anchor="right" open={active} onClose={closeDrawer}>
      <Box sx={{ width: 500, padding: '10px' }} role="presentation">
        {element}
      </Box>
    </Drawer>
  );
};

export default Sidebar;
