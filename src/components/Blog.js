import React,{useState,useEffect} from 'react'
import axios from 'axios'
import OAuth  from 'oauth-1.0a'
import CryptoJS from 'crypto-js'
import jQuery from 'jquery'
import './Blog.css'


function Blog() {

 const [posts, setPosts]=useState([]);
useEffect(()=>{

    const url = 'http://localhost/labb2/wordpress/wp-json/wp/v2/posts/'

    

    const requestData = {
        url: url,
         method: 'GET'
    };

   axios.get(
        requestData.url)
    .then(function(response){
        console.log("result from blog",response.data);
        
        setPosts(response.data);
    }, function(error){
        console.log(error)
    });
   

},[])

    
    return (
<>
<h1>Blog</h1>

         <div class="wrapper-blog">
 {posts.map((post) => (
                <div class="card-blog">
 <h2>{post.title.rendered}</h2>
 <p>{post.excerpt.rendered}</p>
 <span> <b>Date:</b>
     {post.date}</span>
     <span>Author:{post.author}</span>
     <a  class="blog-link" href={post.link}>Blog post link</a>
</div>
            ))
}

           



 </div>
 </>
    )
    }

export default Blog
