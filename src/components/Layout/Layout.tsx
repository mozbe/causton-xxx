import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Container } from '@mui/material';
/* *** */
import { loadingState } from '@state/loading';
import AppMenu from '@components/AppMenu';
import BackgroundImage from '@components/BackgroundImage';
import LoadingProgress from '@components/LoadingProgress';

const Layout = () => {
  const loading = useRecoilValue(loadingState);

  return (
    <Container sx={{ p: 10 }}>
      <BackgroundImage />
      <AppMenu />
      <LoadingProgress loading={loading} />
      <Outlet />
    </Container>
  );
};

export default Layout;
