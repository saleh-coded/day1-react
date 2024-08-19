import React from "react";
// import products from "../assets/data/products";
import "../assets/css/starts.css";

const ProductItem = ({ itemImage, itemName, itemPrice }) => {
  return (
    <div className="item-container">
      <img src={itemImage} alt="Saleh's cookies 1" />
      <h3>{itemName} </h3>
      <p>Price: {itemPrice} </p>
    </div>
  );
};

export default ProductItem;
