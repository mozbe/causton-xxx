import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { useAuth, useSigninCheck } from 'reactfire';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
/* *** */
import { loadingState } from '@state/loading';
import { SignIn, SignOut } from '@components/Auth';

const AppMenu = () => {
  const { data: signInCheck, status } = useSigninCheck();
  const auth = useAuth();
  const action = signInCheck?.signedIn ? <SignOut auth={auth} /> : <SignIn auth={auth} />;
  const setLoading = useSetRecoilState(loadingState);

  useEffect(() => {
    setLoading(true);

    if (status === 'success') {
      setLoading(false);
    }
  }, [status]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="inherit">
        <Toolbar variant="dense">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>...</Typography>
          {action}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AppMenu;
