import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = async () => {
    //console.log("params", params);
    let result = await fetch(`http://localhost:5000/product/${params.id}`);
    result = await result.json();
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company);

    console.warn("getproduct ", result);
  };
  const updateProduct = async () => {
    console.log(name, price, category, company);
    let result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/");
  };

  return (
    <div className="product">
      <h1>----Update Product----------</h1>
      <input
        type="text"
        value={name}
        placeholder="Enter Product Name"
        className="inputbox"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        value={price}
        placeholder="Enter Product Price"
        className="inputbox"
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />

      <input
        type="text"
        value={category}
        placeholder="Enter Product Category"
        className="inputbox"
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />

      <input
        type="text"
        value={company}
        placeholder="Enter Product Company"
        className="inputbox"
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />

      <button onClick={updateProduct} className="appButton">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
