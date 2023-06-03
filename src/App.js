import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgetPassword from './components/Auth/ForgetPassword';
import Resetpassword from './components/Auth/Resetpassword';
import Contactus from './components/Auth/Contactus';
import Request from './components/Request/Request';
import About from './components/About/About';
import Subscribe from './components/Payments/Subscribe';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Notfound from './components/Notfound/Notfound';
import Coursepage from './components/CoursePage/Coursepage';
import Profile from './components/Profile/Profile';
import UpdateProfile from './components/Profile/UpdateProfile';
import ChangePassword from './components/Profile/ChangePassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import CreateCourse from './components/Admin/CreateCourse/CreateCourse';
import AdminCourses from './components/Admin/AdminCourses/AdminCourses';
import Users from './components/Admin/Users/Users';
function App() {
  return (
<Router>
  <Header/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/courses" element={<Courses/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/changepassword" element={<ChangePassword/>}/>
    <Route path="/updateprofile" element={<UpdateProfile/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/request" element={<Request/>}/>
    <Route path="/register" element={<Signup/>}/>
    <Route path="/forgetpassword" element={<ForgetPassword/>}/>
    <Route path="/resetpassword/:token" element={<Resetpassword/>}/>
    <Route path="/contact" element={<Contactus/>}/>
    <Route path="/subscribe" element={<Subscribe/>}/>
    <Route path="/paymentfail" element={<PaymentFail/>}/>
    <Route path="/paymentsuccess" element={<PaymentSuccess/>}/>
    <Route path="/notfound" element={<Notfound/>}/>
    <Route path="/course/:id" element={<Coursepage/>}/>
    <Route  exact path="/admin/dashboard" element={<Dashboard/>}/>
    <Route  exact path="/admin/admincourses" element={<AdminCourses/>}/>
    <Route  exact path="/admin/createcourses" element={<CreateCourse/>}/>
    <Route  exact path="/admin/users" element={<Users/>}/>
  </Routes>
  <Footer/>
</Router>
  );
}

export default App;
