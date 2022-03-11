import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
const Myorders = () => {
  const { user } = useAuth();
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(` http://localhost:4000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrders(data));
  }, [user.email]);
  const handleRemoveOrder = (id) => {
    const proceed = window.confirm("Want to delete your Order?");
    if (proceed) {
      fetch(` http://localhost:4000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const restOrders = myOrders.filter((item) => item._id !== id);
            setMyOrders(restOrders);
            toast.success("Order deleted successfully !", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    }
  };
  return (
    <div className="bg-white ">
      <h2 className="bg-dark text-center text-white  ">Your Orders</h2>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Client Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {myOrders.map((order, index) => (
            <tr key={order._id}>
              <td>{index + 1}</td>
              <td>{order.purchaseProduct.productName} </td>
              <td>
                <img src={order.purchaseProduct.img} height="50px" alt="" />
              </td>
              <td>{order.userName}</td>
              <td>{order.email}</td>
              <td>{order.phone}</td>
              <td>{order.city}</td>
              <td>
                {" "}
                <FaTrash
                  onClick={() => handleRemoveOrder(order._id)}
                  className="text-danger"
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
       
      </Table>
      {/* <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
    </div>
  );
};

export default Myorders;
