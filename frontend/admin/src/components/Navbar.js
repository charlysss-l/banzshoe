import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'
const Navbar = () => {
  return (
    <nav className={styles.navbarAdmin}>
         <h1 className={styles.NavTitle}> BanzShoes Admin's Panel</h1>
        <ul>
            <li>
                <Link to="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
                <Link to="/create-product" className={styles.navLink}>Create Product</Link>
            </li>
            <li>
                <Link to="/list-products" className={styles.navLink}>List Products</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar