import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './Order.css'
import OAuth  from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import jQuery from 'jquery'
function Order() {

const [orders, setOrders]=useState([]);

useEffect(()=>{
const ck = 'ck_e674ade8eec0fc13f0dcfb859af3c35357de170d'
    const cs = 'cs_1108f05280312b2de9cf69a5a10010da767c3e0c'
    const url = 'http://localhost/labb2/wordpress/wp-json/wc/v2/orders'

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
        console.log("result from orders",response.data);
        setOrders(response.data);
    }, function(error){
        console.log(error)
    });
   

},[])










    return (
        <div class="wrapper">
           <table class="styled-table">
    <thead>
        <tr>
            <th>Order Id</th>
            <th>Billing Name</th>
            <th>Status</th>
             <th>Total Sum</th>
              <th>Date</th>
        </tr>
    </thead>
    <tbody>
{orders.map((order) => (
                <tr>
            <td>{order.id}</td>
            <td>{order.billing.first_name} {order.billing.last_name} </td>
            <td>{order.status}</td>
            <td>{order.total} kr</td>
            <td>{order.date_created}</td>
        </tr>
            ))
}

    
    </tbody>
</table> 
        </div>
    )
}

export default Order
