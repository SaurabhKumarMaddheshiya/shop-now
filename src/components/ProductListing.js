import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setProducts} from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';
import $, { dataString } from "jquery";

const ProductListing = () => {

	const products = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		$.ajax({
		type: "GET",
		url: "https://fakestoreapi.com/products",
		cache: false,
		data: dataString,
		success: function (response) {
		dispatch(setProducts(response));
		},
		});
  }, []);
	console.log("products: ", products);
	return (
		<div>
			<ProductComponent />
		</div>
	)
}

export default ProductListing;
