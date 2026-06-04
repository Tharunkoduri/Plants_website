import { Route,Routes } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { Home } from "./components/Home";
import { ForgotPassword } from "./components/forgot-password";
import { FashionStore } from "./components/fashion-store";
import { TrendingGardening } from "./components/trending-gardening";
import { Cart } from "./components/cart";
import BlogPage from "./components/blogs";

function App(){
  return(
   <Routes>
    <Route path="/" element={<SignUp />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/home" element={<Home />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/cart" element={< Cart/>} />
    <Route path="/fashionstore" element={< FashionStore/>} />
    <Route path="/trendinggardening" element={< TrendingGardening />} />
    <Route path="/blogs" element={< BlogPage />} />
   </Routes>
  )
}

export default App;