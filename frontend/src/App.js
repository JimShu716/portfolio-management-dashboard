import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/UserPage'
import Stock from "./Pages/StockPage";
import {createMuiTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Login from "./Pages/LoginPage";

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Roboto', 'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
    }
});

function App() {
  return (
      <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route exact strict path={'/user'} element={<User />} />
              <Route exact strict path={'/trade'} element={<Stock />} />
              <Route exact strict path={'/'} element={<Login />} />
            </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
