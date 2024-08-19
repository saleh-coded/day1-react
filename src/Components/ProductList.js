import React from 'react'
import "../assets/css/starts.css";
import products from '../assets/data/products';
import ProductItem from './ProductItem';

const ProductList = () => {
    const displayIteam = products.map((product) => {
        return <ProductItem

        itemImage={product.image}
        itemName={product.name}
        itemPrice={product.price}
        
        />;

    });
  return (
    <div className="item-section">{displayIteam}</div>
  )
};

export default ProductList