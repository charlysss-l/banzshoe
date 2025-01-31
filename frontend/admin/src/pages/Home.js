import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeCard}>
        
          <h1 className={styles.homeTitle}>Welcome, Admin!</h1>
          <p className={styles.homeDesc}>
            Manage your store, track sales, and update products seamlessly.
          </p>
      </div>
    </div>
  );
};

export default Home;
