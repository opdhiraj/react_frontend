import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    //since this is a get method we dont write method and content type because it is get method
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProducts(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:5000/products/${id}`, {
      method: "Delete",
    });
    result = result.json();
    if (result) {
      alert("record deleted");
      //called getProducts method to update the ui after delete
      getProducts();
    }
  };

  const searchHandle = async (e) => {
    console.warn(e.target.value);
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };
  return (
    <div className="product-list">
      <h1>Product List</h1>
      <input
        className="search-product-box"
        onChange={searchHandle}
        placeholder="Search Product"
      />
      <ul>
        <li>sr</li>
        <li>Price</li>
        <li>category</li>
        <li>price</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((item, index) => (
          <ul key={item._id}>
            <li>{index + 1}</li>
            {/* +1 since index starts with zero */}
            <li>{item.name}</li>
            <li>{item.category}</li>
            <li>Rs: {item.price}</li>
            <li>
              <button onClick={() => deleteProduct(item._id)}>Delete</button>
              <Link to={"/update/" + item._id}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>No Match Found</h1>
      )}
    </div>
  );
};

export default ProductList;
