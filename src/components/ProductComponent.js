import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './HomepageStyle.css';

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category, description } = product;
    return (
      <>
     
          <div className="card mb-5 my-card" id="my-card" key={id} >
          <Link to={`/product/${id}`} >
            <img src={image} className="card-img-top prod-image m-3" alt={title} />
            <div className="card-body">
              <h5 className="card-title prod-title">{title}</h5>
              <p className="card-text prod-desc">{description}</p>
              <p className="card-text prod-desc"><b>₹ {price}</b></p>
              <p className="card-text prod-desc"><i>{category}</i></p>
            </div>
            </Link>
          </div>
         
      </>
    )
  });
  return (
    <>
      <div className="container mt-5 main-container">
        {renderList} 
      </div>
    </>

  )
}

export default ProductComponent;
