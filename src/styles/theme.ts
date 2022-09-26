import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: '13px',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          padding: '10px 20px',
          position: 'relative',

          '&:after': {
            background: 'linear-gradient(270deg,transparent 0,rgba(0,0,0,.1))',
            bottom: '-1px',
            content: '\'\'',
            height: '1px',
            left: '20px',
            position: 'absolute',
            width: 'calc(100% - 40px)',
          },
          ['& .MuiAvatar-root']: {
            height: '20px',
            width: '20px',
          },
          ['& .MuiCardHeader-avatar']: {
            marginRight: '10px',
          },
          ['& .material-icons']: {
            fontSize: '13px',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 0,
          paddingBottom: 0,
        },
      },
    },
  },
});
