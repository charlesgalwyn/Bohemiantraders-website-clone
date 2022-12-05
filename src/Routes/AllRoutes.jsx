import React from 'react'
import { Route,Routes } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Products from "../Pages/Products/Products"
import Home from "../Pages/Home"
import ProductDetail from "../Pages/ProductDetail/ProductDetail"
import Cart from "../Components/cart/Cart"
import Payment from "../Pages/Payment/Payment"

const AllRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<ProductDetail/>} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signUp" element={<SignUp />}></Route>
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Payment/>} />
    </Routes>
  )
}

export default AllRoutes








