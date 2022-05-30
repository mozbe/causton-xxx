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
        },
      },
    },
  },
});
