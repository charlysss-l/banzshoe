import React from 'react'
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div>
        <h1 className={styles.homeTitle}>Hi Customer!</h1>
        <h6 className={styles.homeDesc}>Welcome to BanzShoes</h6>
      </div>
    </div>
  )
}

export default Home