import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/UserPage'
import Stock from "./Pages/StockPage";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@emotion/react";
import Login from "./Pages/LoginPage";
import { useState} from "react";
import SideBarOpenContext from "./Components/Sidebar/SideBarContext";

const theme = createTheme({
    typography: {
        fontFamily: [
            'Roboto', 'Helvetica', 'Arial', 'sans-serif'
        ].join(','),
    }
});


function App() {
    const [openSidebar, setOpenSidebar] = useState(true);
    return (
        <SideBarOpenContext.Provider value={[openSidebar, setOpenSidebar]}>
              <ThemeProvider theme={theme}>
                  <BrowserRouter>
                    <Routes>
                      <Route exact strict path={'/user'} element={<User />} />
                      <Route exact strict path={'/trade'} element={<Stock />} />
                      <Route exact strict path={'/'} element={<Login />} />
                    </Routes>
                  </BrowserRouter>
              </ThemeProvider>
        </SideBarOpenContext.Provider>
  );
}

export default App;
