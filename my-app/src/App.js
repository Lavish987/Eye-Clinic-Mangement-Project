import './App.css';
import Home from './Home';
import {
  
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import UserDashboard from './pages/userRoute/UserDashboard';
import PrivateRoute from './RouteComponent/PrivateRoute';
import ProfileInfo from './pages/userRoute/ProfileInfo';
import Contact from './Contact';
import About from './About';
import UpdatePass from './pages/userRoute/updatePass';

function App() {
  
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/user' element={<PrivateRoute/>}>
        <Route path='dashboard' element={<UserDashboard/>}/>
        <Route path='profile-info' element={<ProfileInfo/>}/>
        <Route path='updatePass' element={<UpdatePass type={'update'}/>}/>
          </Route>
        <Route path='forgetPass' element={<UpdatePass type={'forget'}/>}/>
       </Routes>
       </BrowserRouter>
  );
}

export default App;
