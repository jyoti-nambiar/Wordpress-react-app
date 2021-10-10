import axios from 'axios';
import React, { useState, useEffect , useRef} from 'react';
import Product from './components/Product';
import Blog from './components/Blog';
import './App.css';
import Navbar from './components/Navbar';
import AppRoute from './components/AppRoute';


function App() {
  
const [data, setData]=useState();


  
useEffect(()=>{

const fetchData= async()=>{

var axios = require("axios");

axios.request({
  url: "/oauth/token",
  method: "get",
  baseURL: "https://localhost/labb2/wordpress/wp-json/wp/v2/product",
  auth: {
    consumer_key: "ck_e674ade8eec0fc13f0dcfb859af3c35357de170d",
    consumer_secret_key: "cs_1108f05280312b2de9cf69a5a10010da767c3e0c"
  },
  data: {
    "grant_type": "client_credentials",
    "scope": "public"    
  }
}).then(function(res) {
  console.log(res);  
  console.log(res[0].images.src);
});




const response=await axios.get("https://localhost/labb2/wordpress/wp-json/wp/v2/product");
console.log(response.data);
setData(response.data)
}

fetchData();


},[])



  return (
<>
<Navbar />
<AppRoute />






    

</>
  
  );
}

export default App;