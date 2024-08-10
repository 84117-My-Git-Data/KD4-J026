import { Route, Routes } from "react-router-dom";
import UserLogin from "./screens/UserLogin";
import UserRegister from "./screens/UserRegister";
import Home from "./screens/Home";
import Booking from './screens/Booking';
import BookingDetails from './screens/BookingDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AboutUs from "./screens/AboutUs";
import ContactUs from "./screens/ContactUs";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminLogin from "./screens/AdminLogin";
import AdminHome from "./screens/AdminHome";
import ParkingCost from "./screens/ParkingCost";




function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<UserLogin/>}/>
        <Route path="login" element={<UserLogin/>}/>
        <Route path="register" element={<UserRegister/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="booking" element={<Booking/>}/>
        <Route path="bookingDetails" element={<BookingDetails/>}/>
        <Route path="aboutus" element={<AboutUs/>}/>
        <Route path="contactus" element={<ContactUs/>}/>
        <Route path="adminlogin" element={<AdminLogin/>}/>
        <Route path="adminhome" element={<AdminHome/>}/>
        <Route path="parkingcost" element={<ParkingCost/>}/>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
