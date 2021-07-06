import React from "react";
import Header from "./components/Header.js";
import ProductListing from "./components/ProductListing";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App(getId,{arr} ) {
  

  
  return (
   <>
    <Router>
     <Header />
      <Switch>
         
    {/* <Covid/> */}
        <Route path="/" exact component={ProductListing} />
        <Route path="/product/:productId" exact component={ProductDetail} />
        <Route >404 Not Found!</Route>
        <Footer />
      </Switch>
    </Router>
   </>
  );
}

export default App;
