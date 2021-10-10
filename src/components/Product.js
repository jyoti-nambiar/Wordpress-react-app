import React, { useState, useEffect } from "react";
import axios from 'axios'
import './Product.css';
import OAuth  from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import jQuery from 'jquery'


function Product() {

const [products, setProducts]=useState([]);

useEffect(()=>{
const ck = 'ck_e674ade8eec0fc13f0dcfb859af3c35357de170d'
    const cs = 'cs_1108f05280312b2de9cf69a5a10010da767c3e0c'
    const url = 'http://localhost/labb2/wordpress/wp-json/wc/v2/products'

    const oauth = OAuth({
        consumer: {
            key: ck,
            secret: cs
        },
        signature_method: 'HMAC-SHA1',
        hash_function: function(base_string, key) {
            return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
        }
    });

    const requestData = {
        url: url,
         method: 'GET'
    };

   axios.get(
        requestData.url + '?' + jQuery.param(oauth.authorize(requestData))
    ).then(function(response){
        console.log("result from products",response.data);
        console.log("src",response.data[0].images[0].src);
         console.log("src",response.data[0].categories[0].name);
        setProducts(response.data);
    }, function(error){
        console.log(error)
    });
   

},[])

    

return (
<>
<h1>Products</h1>
  <div class="wrapper">
      
 {products.map((product) => (
                <div class="card">
  <img class="card-img" src={product.images[0].src} alt="Avatar"  />
  <div class="container">
    <h4><b>{product.slug}</b></h4>
    <p>{product.price} kr </p>
    <p>Categories: {product.categories[0].name }</p>
    <a href={product.permalink}>Product url</a>
<p>{product.description}</p>
  </div>
</div>
            ))
}

           



 </div>
</>
)
}
export default Product;