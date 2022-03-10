 import './App.css';
import Home from './Pages/Home';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './Pages/AboutUs';
import Store from './Pages/Store';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Shop from './Components/Shop';
import Login from './Pages/Login';
import PrivateRoute from './Components/PrivateRoute';
import AuthProvider from './Components/AuthProvider/AuthProvider'
import Dashboard from './Pages/Dashboard';
import Purchase from './Pages/Purchase';
function App() { 
  return (
    <AuthProvider>
      <BrowserRouter className="App">
       {/* <Navigation/> */}
      <Routes>
       
        <Route path='/' element={<Home />} />
        <Route path='aboutus' element={<AboutUs />} />
        <Route path='dashboard/*' element={<Dashboard />} />
        <Route path='store' element={<Store/>} /> 
        <Route path='product/:productId' element={<Shop />} />
        <Route path='purchase/:productId' element={<PrivateRoute>
          <Purchase />
        </PrivateRoute>} />
        <Route path='login' element={<Login />} />
         
        
     
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
