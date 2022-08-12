import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/UserPage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path={'/testpage'} element={<User />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
