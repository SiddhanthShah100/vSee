import './App.css';
import LoginPage from './components/LoginPage';
import RegistrationPage from './components/RegistrationPage';
import Home from '../src/components/Home';
import Profile from '../src/components/Profile';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

const Layout = ({children}) => {
   
  return (
      <div>
          <App />
          {children}
      </div>
  );
}



function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element ={<LoginPage/>} />
      <Route path='/RegistrationPage' element ={<RegistrationPage/>} />
      <Route path='/Home' element ={<Home/>} />
      <Route path='/Profile' element ={<Profile/>} />
      </Routes>
    </Router>
  );
}


export default App;
