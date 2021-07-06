import React,{useState, useEffect} from "react";
// import PropTypes from "prop-types";
// import $, { dataString } from "jquery";
import { Link } from "react-router-dom";
import $, { dataString } from "jquery";
import "./HomepageStyle.css";

const Homepage = () => {


const [productDatas, setproductDatas] = useState([]);
  // console.log();
  useEffect(() => {
    $.ajax({
      type: "GET",
      url: "https://fakestoreapi.com/products",
      cache: false,
      data: dataString,
      success: function (productDatas) {
      setproductDatas(productDatas);
      console.log(productDatas);
      },
    });
  }, []);

const [keyValue, setKeyValue] = useState();

    const getData = () => {
    setKeyValue("abc");
  console.log(keyValue);
  //  console.log(getData);
  }
  // console.log(keyValue);
  // console.log(data);
  // let textInput = React.createRef();

  // function getId(prodid) {
  //   setKeyValue(prodid)
  //   console.log(prodid)
  //   console.log(keyValue);
  // }
  // console.log(useState("key"));

  return (
    <>
      <div className="container mt-5 main-container">
          {productDatas.map((productData, key) => (
            <div className="card mb-5 my-card" id="my-card" >
            <img src={productData.image} className="card-img-top prod-image m-3" alt={productData.title} />
            <div className="card-body">
              <h5 className="card-title prod-title">{productData.title}</h5>
              <p className="card-text prod-desc">{productData.desc}</p>
            </div>
          </div>
          ))}
      </div>
    </>
  );
};

export default Homepage;
