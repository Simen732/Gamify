import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile';
function App() {
  return (
    <div class="wrapper">
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
