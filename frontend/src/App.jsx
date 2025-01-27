import './index.css'
import Hero from './Pages/Home'
import Login from './Pages/login_page'
import Navbar from './Pages/Navbar'
import ProductGallery from './Pages/ProductGallery'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from './Pages/Signup'
import SellerSignup from './Pages/Seller_Signup'
import SellerLogin from './Pages/Seller_Login'
import Cart from './Pages/Cart'
import Wishlist from './Pages/Wishlist'
import About from './Pages/About'
// import AboutUs from './Pages/About_us'

function App() {
  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/" element={<ProductGallery />} />
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignupForm/>} />
        <Route path='/seller-signup' element={<SellerSignup/>}/>
        <Route path='/seller-login' element={<SellerLogin/>}/>
        <Route path='/user-cart' element={<Cart/>}/>
        <Route path='/user-wishlist' element={<Wishlist/>}/>
        <Route path='/about-us' element={<About/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
