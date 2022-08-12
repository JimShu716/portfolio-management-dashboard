import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/UserPage'
import Stock from "./Pages/StockPage";
import {createMuiTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        ].join(','),
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path={'/User'} element={<User />} />
              <Route path={'/Trade'} element={<Stock />} />
              <Route path={'/Login'} element={<User />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
