import React from "react";
import Register from "../Public Routes/Register";
import Login from "../Public Routes/Login";
import VerifyOTP from "../Public Routes/VerifyOTP";
import Home from "../Public Routes/Home";
import Search from "../Public Routes/Search";
import Account from "../Private Routes/Common/Account";
import EditProfile from "../Private Routes/Common/EditProfile";
import Cart from "../Private Routes/Customer/Cart";
import Orders from "../Private Routes/Customer/Orders";
import Wishlist from "../Private Routes/Customer/Wishlist";
import SellerDashboard from "../Private Routes/Seller/SellerDashboard";
import SellerOrders from "../Private Routes/Seller/SellerOrders"


const navs = [
    // ----------------------- BEFORE AUTH --------------------------- 
  {//object is a key and value pair
    //!--------------BEFORE AUTH-------------
    path: "/seller/register",
    element: <Register role={"SELLER"}/>,//role is a prop and it is a key and Register component should be created.
    requireAuth: false,
    isVisibleAfterAuth: false,//register component should not be visible after getting the Authentication of seller.
    role: "ALL",//it accepts seller and customer.
  },
  {
    path: "/customer/register",
    element: <Register role={"CUSTOMER"}/>, //role is a prop and it is a key and Register component should be created.
    requireAuth: false,
    isVisibleAfterAuth: false,//register component should not be visible after getting the Authentication of seller.
    role: "ALL",//it accepts seller and customer.
  },
  {
    path: "/login",
    element: <Login />,//Login component is created.
    requireAuth: false,
    isVisibleAfterAuth: false,//Login component should not be visible after getting the Authentication of seller.
    role: "ALL",//it accepts seller and customer.
  },
  {
    path: "/varify-otp",
    element: <VerifyOTP />,//VerifyOTP component is created.
    requireAuth: false,
    isVisibleAfterAuth: false,//VerifyOTP component should not be visible after getting the Authentication of seller.
    role: "ALL",//it accepts seller and customer.
  },
//!--------------CUSTOMER---------
  {
    path: "/cart",
    element: <Cart />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  {
    path: "/wishlist",
    element: <Wishlist />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role:"CUSTOMER",
  },
  {
    path: "/orders",
    element: <Orders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "CUSTOMER",
  },
  //!-------------COMMON FOR BOTH CUSTOMER AND SELLER AND AFTER AUTH---------
  {
    path: "/account",
    element: <Account />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: ["ALL"],
  },
  
  {
    path: "/edit-profile",
    element: <EditProfile />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: ["ALL"],
  },
  //!--------------BEFORE AND AFTER AUTH-------------

  {
    path: "/search",
    element: <Search />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  {
    path: "/home",
    element: <Home />,
    requireAuth: false,
    isVisibleAfterAuth: true,
    role: "ALL",
  },
  
  //!------------------SELLER-----------------------
  {
    path: "/seller-orders",
    element: <SellerOrders />,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
  {
    path: "/seller-dashboard",
    element: <SellerDashboard/>,
    requireAuth: true,
    isVisibleAfterAuth: true,
    role: "SELLER",
  },
]

export default navs
