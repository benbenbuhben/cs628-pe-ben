import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',  // Default MUI blue
    },
    secondary: {
      main: '#f50057',  // Default MUI pink
    },
  },
  typography: {
    // You can override default font sizes, families, etc. if you want
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
  },
});

export default theme;
