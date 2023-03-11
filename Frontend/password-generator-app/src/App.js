import RegistrationForm from './Components/RegistrationForm';
import './App.css';
import LoginForm from './Components/LoginForm';
import { Route, Routes } from 'react-router-dom';
import PasswordGenerator from './Components/PasswordGenerator';
import PasswordStrength from './Components/PasswordStrength';
import Home from './Components/Home';
//import ProtectedRoute from './Components/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/login' element={<LoginForm />} />
      <Route path='/registration' element={<RegistrationForm />} />
      <Route path='/' element={<Home/>} />
      <Route path='/generate' element={<PasswordGenerator />} />
      <Route path='/checkstrength' element={<PasswordStrength />} />
    </Routes>
  );
}

export default App;
