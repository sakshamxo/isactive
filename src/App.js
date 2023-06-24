import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import "./Stylesheets/nav.css"
import { Route,Routes,NavLink } from 'react-router-dom';
import Profile from './Components/Profile';
import User from './Components/User';
const App = () => {
  return (
 <div className='container w-50 mt-5'>
  <nav>
    <NavLink className={({isActive})=>(isActive ? 'red' : "")} to = '/'>Home</NavLink>
    <NavLink className={({isActive})=>(isActive ? 'red' : "")} to = "/signup">Signup</NavLink>
    <NavLink className={({isActive})=>(isActive ? 'red': "")}to = "/signin">Signin</NavLink>
  </nav>
  <hr />
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/signup' element={<Signup/>} />
    <Route path='/signin' element={<Signin/>}>
      <Route path='/signin/profile' element={<Profile/>}/>
      <Route path='/signin/user' element={<User/>}/>

    </Route>
  </Routes>
 </div>
  );
}

export default App;
