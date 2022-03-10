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
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="bg-success m-0 ">
        <h2 className="m-0 text-center">Dashboard</h2>
      </div>
      <div>
        <div className="main-container bg-success d-flex">
          <motion.div
            animate={{ width: isOpen ? "200px" : "40px" }}
            className="sidebar"
          >
            <FaBars onClick={toggle} className="ms-4 mt-2" />
            {isOpen && (
              <div >
                {" "}
                <div>
                  <Link to="/">
                    {" "}
                    <FaHome /> Home
                  </Link>
                </div>
                <div>
                  <Link to="myorder">My Orders</Link>
                </div>
                <div>
                  <Link to="addreview">Add Reviews</Link>
                </div>
                <div>
                  <Link to="payment">Payment</Link>
                </div>
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
                
              </div>
            )}
          </motion.div>
          <div className="w-100 bg-secondary mx-auto pt-3 p-5">
            <Routes>
              <Route path="myorder" element={<Myorders />} />
              <Route path="addreview" element={<AddReview />} />
              <Route path="addproduct" element={<AddProduct />} />
              <Route path="manageorders" element={<ManageOrders />} />
              <Route path="makeadmin" element={<MakeAdmin />} />
              <Route path="payment" element={<Payment />} />
              <Route path="allproducts" element={<AllProducts />} />
              <Route path="manageproducts" element={<ManageProduct />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
