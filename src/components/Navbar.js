import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <ul>
  <li><Link to="/product">Product</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/order">Order</Link></li>
  
</ul>
        </nav>
    )
}

export default Navbar
