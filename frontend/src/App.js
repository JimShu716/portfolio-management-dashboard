import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/UserPage'
import Stock from "./Pages/StockPage";
import Login from "./Pages/LoginPage";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/User'} element={<User />} />
          <Route path={'/Trade'} element={<Stock />} />
          <Route path={'/Login'} element={<Login />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
