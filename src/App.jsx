import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'
import Navbar from './Components/Navbar'
import ContactUs from './Components/ContactUs'
import PropertyCard from './Components/PropertyCard'
import Landing from './Components/Landing';
import HeroSection from './Components/HeroSection';
import PropertyDetails from './Components/PropertyDetails';
import Properties from './Components/Properties';
import Login from './Components/Login';
import SignUp from './Components/SignUp'

function App() {
  return (
    <div className='screen'>
      <HeroSection/>
    <Router>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Landing/>}></Route>
          <Route path="/hero" element={<HeroSection/>}></Route>
          <Route path='/properties' element={<Properties/>}></Route>
          <Route path='/propertyDetails' element={<PropertyDetails/>}></Route>
          <Route path='/propertycard' element={<PropertyCard/>}> </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/signup' element={<SignUp/>}></Route>
          <Route path='/contactUs' element={<ContactUs/>}></Route>
      </Routes>
    </Router>
    </div>
  )
}
export default App