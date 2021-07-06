import React, { useEffect } from 'react';
import $, { dataString } from "jquery";
import { useParams } from 'react-router-dom';
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import './ProductDetail.css';

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { id, title, image, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();
  console.log(product);

  const fetchProductDetails = () => $.ajax({
    type: "GET",
    url: `https://fakestoreapi.com/products/${productId}`,
    cache: false,
    data: dataString,
    success: function (response) {
      dispatch(selectedProduct(response));
    },
  });

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetails();
    return () => {
      dispatch(removeSelectedProduct());
    }
  }, [productId]);
  return (
    <>
      {Object.keys(product).length === 0 ? (
        <div className="loading"></div>
      ) : (
        <div className="container mt-5 d-flex">
          <div className="main-image-container row">
            <h3>{category}</h3>
            <div className="main-image">
              <img src={image} className="product-image mt-3" alt={title} />
            </div>
            <button type="button" class="btn btn-danger ">Add to Cart</button>
            <button type="button" class="btn btn-light"></button>
          </div>
          <div className="main-details ms-5">
            <h2>{title}</h2>
            <h4>Current Price: $ {price}</h4>
            <br />
            <p>{description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetail;
