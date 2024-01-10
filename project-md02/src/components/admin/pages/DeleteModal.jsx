import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

function DeleteModal({ show, idDel, setShow }) {
  const navigate = useNavigate();
  const [delProduct, setDelProduct] = useState({});

  const getDelProduct = async (idDel) => {
    await axios
      .get(`http://localhost:8000/products/${idDel}`)
      .then((data) => setDelProduct(data.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getDelProduct();
  }, []);

  const handleClose = () => {
    setShow(false);
  };
  const handleDeleteProduct = async (idDel) => {
    await axios.delete(`http://localhost:8000/products/${idDel}`);
  };
  return (
    <div>
      {" "}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete comfirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to delete product with:</p>
          <p>ID: {idDel}</p>
          <p>Name:{delProduct.title} </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleDeleteProduct(idDel)}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default DeleteModal;
