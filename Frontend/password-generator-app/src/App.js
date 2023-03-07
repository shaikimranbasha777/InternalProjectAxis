import RegistrationForm from './Components/RegistrationForm';
import './App.css';
import LoginForm from './Components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import PasswordGenerator from './Components/PasswordGenerator';
import PasswordStrength from './Components/PasswordStrength';
import Navbar from './Components/Navbar';
import Home from './Components/Home';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/registration' element={<RegistrationForm />}/>
        <Route path='/generate' element={<PasswordGenerator/>}/>
        <Route path='/checkstrength' element={<PasswordStrength/>}/>
      </Routes>
    </div>
  );
}

export default App;
