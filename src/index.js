import { CssBaseline } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ThemeProvider,createTheme} from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <App/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

