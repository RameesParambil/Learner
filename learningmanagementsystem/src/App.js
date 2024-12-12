import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar/navbar';
import AdminNavbar from './Navbar/AdminNavbar';
import Footer from './pages/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Course from './pages/Course';
import BookingPage from './pages/Bookingpage';
import ConfirmationPage from './pages/ConfirmationPage';
import Contact from './pages/Contact';
import CourseDetails from './pages/Coursedetails';
import Admin from './pages/Admin';
import Dashboard from './pages/Dashboard';
import Bookingdetails from './pages/Bookingdetails';
import Registerdetails from './pages/Registerdetails';
import MyProfile from './pages/MyProfile';
import { ProfileProvider } from './pages/ProfileContext';

function App() {
  const location = useLocation();

  const isAdminRoute = location.pathname === '/admin' || location.pathname === '/dashboard' || location.pathname === '/register-details' || location.pathname === '/booking-details';

  return (
    <div className="App">
      <ProfileProvider>
        {
         isAdminRoute ? (
          <AdminNavbar /> 
         ) : (
          <Navbar />
         ) 
        }

       
        <Routes>
           {/* Admin Routes */}
          <Route path='/admin' element={<Admin />}  />
          <Route path='/dashboard' element={<Dashboard/> } />
          <Route path='/booking-details' element={<Bookingdetails/> } />
          <Route path='/register-details' element={<Registerdetails/> } />

        {/* User Routes */}
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/course' element={<Course/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path="/book-course/:id" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path='/myprofile' element={<MyProfile/> } />
        </Routes>
       <Footer/>
      </ProfileProvider>
    </div>
  );
}

export default App;






