import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
const ManageProduct = () => { 
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleRemoveOrder = (id) => {
    const proceed = window.confirm("Want to delete your Order?");
    if (proceed) {
      fetch(`http://localhost:4000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const restProducts = products.filter((item) => item._id !== id);
            setProducts(restProducts);
            toast.success("Order deleted successfully !", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
        });
    }
  };
  return (
    <div className="bg-white ">
      <h2 className="bg-dark text-center text-white  ">ALL ORDER</h2>
      <Table responsive >
        <thead>
          <tr>
            <th>SL.No.</th>
            <th>Product Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Category</th> 
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>{product.name} </td>
              <td>
                <img src={product.img} height="50px" alt="" />
              </td>
              <td>{product.price}</td>
              <td>{product.category}</td> 
              <td className="text-center">
                {" "}
                <FaTrash
                  onClick={() => handleRemoveOrder(product._id)}
                  className="text-danger "
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

export default ManageProduct;
