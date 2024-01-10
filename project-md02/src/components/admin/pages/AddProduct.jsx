import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddProduct() {
  const navigate = useNavigate();

  const [productInput, setProductInput] = useState({
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    rating: "",
    stock: "",
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  });
  const {
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = productInput;
  const handleChangeInput = (e) => {
    setProductInput({ ...productInput, [e.target.name]: e.target.value });
  };
  console.log("new", productInput);
  const handleAdd = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/products", productInput);
    navigate("/manager-product");
  };

  return (
    <div>
      <h3>Add Product</h3>
      <form action="" onSubmit={handleAdd}>
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">discountPercentage</label>
        <input
          type="text"
          name="discountPercentage"
          value={discountPercentage}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Rating</label>
        <input
          type="text"
          name="rating"
          value={rating}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Stock</label>
        <input
          type="text"
          name="stock"
          value={stock}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Brand</label>
        <input
          type="text"
          name="brand"
          value={brand}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Thumbnail</label>
        <input
          type="text"
          name="thumbnail"
          value={thumbnail}
          onChange={handleChangeInput}
        />
        <br />
        <label htmlFor="">Image</label>
        <input
          type="text"
          name="images"
          value={images}
          onChange={handleChangeInput}
        />
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
