import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
  return (
    <nav className={styles.navbarCustomer}>
      <h1 className={styles.NavTitle}>BanzShoes</h1>
        <ul>
            <li>
                <Link to ="/" className={styles.navLink}>Home</Link>
            </li>
            <li>
                <Link to ="/view-product"  className={styles.navLink}>View Product</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar