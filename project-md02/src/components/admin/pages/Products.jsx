import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

import DeleteModal from "./DeleteModal";

function Products() {
  const [listProduct, setListProduct] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const getProduct = async () => {
    let url = "http://localhost:8000/products";
    if (searchInput) {
      url += `?q=${searchInput}`;
    } else
      await axios
        .get(url)
        .then((data) => setListProduct(data.data))
        .catch((err) => console.log(err));
  };
  console.log("searchI", searchInput);
  console.log(listProduct);

  useEffect(() => {
    getProduct();
  }, [searchInput]);
  // Search

  // Delete modal
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // const [idDel, setIdDel] = useState("");
  // const handleDelete = (idDelete) => {
  //   setShow(true);
  //   setIdDel(idDelete);
  // };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8000/products/${id}`);
  };
  return (
    <div>
      <h3>List products</h3>
      {/* // Search and add */}
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button>Search</button>
        <NavLink to="/manager-product/add-product">
          <button style={{ marginLeft: "500px" }}>Add product</button>
        </NavLink>
      </div>
      {/* // content */}
      <table class="table table-striped text-center mt-5">
        <thead>
          <tr>
            <th>No.</th>
            <th>ID</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Brand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((e, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{e.id}</td>
              <td>{e.title}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
              <td>{e.brand}</td>
              <td>
                <button>Details</button>
                <NavLink to={`/manager-product/edit-product/${e.id}`}>
                  <button>Edit</button>
                </NavLink>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* // end content */}
      {/* <DeleteModal show={show} idDel={idDel} setShow={setShow} /> */}
    </div>
  );
}

export default Products;
