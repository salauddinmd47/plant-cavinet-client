import React, { useState } from "react";
import { motion } from "framer-motion";
import Myorders from "../DashboardPages/Myorders.js";
import AddReview from "../DashboardPages/AddReview.js";
import AddProduct from "../DashboardPages/AddProduct.js";
import ManageOrders from "../DashboardPages/ManageOrders.js";
import Payment from "../DashboardPages/Payment.js";
import MakeAdmin from "../DashboardPages/MakeAdmin.js";
import AllProducts from "../DashboardPages/AllProducts.js";
import { Routes, Route, Link } from "react-router-dom";
import { FaHome, FaBars } from "react-icons/fa";
import AddReviewsTest from "./AddReviewsTest.js";
import ManageProduct from "../DashboardPages/ManageProduct.js";
import useAuth from "../hooks/useAuth.js";
import AdminRoute from "../Components/AdminRoute.js";
const Dashboard = () => {
  const {admin} = useAuth()
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="bg-success m-0 ">
        <h2 style={{ backgroundColor:"#878497",color:"#fcffff" }} className="m-0 text-center  py-3">Dashboard</h2>
      </div>
      <div>
        <div className="main-container   d-flex">
          <motion.div
            animate={{ width: isOpen ? "200px" : "40px" }}
            className="sidebar  "
          >
            <FaBars onClick={toggle} className="ms-4 mt-2 text-white" />
            {isOpen && (
              <div >
                {" "}
                <div>
                  <Link to="/">
                    {" "}
                    <FaHome /> Home
                  </Link>
                  </div>
               {
                 !admin && <>
                  
                <div>
                  <Link to="/dashboard">My Orders</Link>
                </div>
                <div>
                  <Link to="addreview">Add Reviews</Link>
                </div>
                <div>
                  <Link to="payment">Payment</Link>
                </div>
                 </>
               }
               {
                 admin&& <>
                  <div>
                  <Link to="makeadmin">Make Admin</Link>
                </div>
                <div>
                  <Link to="addproduct">Add Product</Link>
                </div>
                <div>
                  <Link to="manageorders">Manage Orders</Link>
                </div>
                <div>
                  <Link to="manageproducts">Manage Products</Link>
                </div>
                 </>
               }
                
              </div>
            )}
          </motion.div>
          <div className="w-100 store-container pt-3 p-5">
            <Routes>
              <Route path="/" element={<Myorders />} />
              <Route path="addreview" element={<AddReview />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="manageorders" element={ <AdminRoute> <ManageOrders /></AdminRoute>} />
              <Route path="makeadmin" element={<AdminRoute><MakeAdmin /></AdminRoute> } />
              <Route path="payment" element={<Payment />} />
              <Route path="allproducts" element={<AdminRoute><AllProducts /></AdminRoute> } />
              <Route path="manageproducts" element={<AdminRoute><ManageProduct /></AdminRoute>} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
