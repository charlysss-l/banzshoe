import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/create-product">Create Product</Link>
            </li>
            <li>
                <Link to="/list-products">List Products</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar