import React, { Component } from 'react';
import styles from './Header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={styles.Header}>
        <img src='https://lh3.googleusercontent.com/proxy/4ok0ki7ZkSw9fki_7QOUXXVmjOtRXlINP5XDOrvbXJe7MHvRs0mzU0hZu-fTD2lOUpWi0wtdYwryvdkQUY_she2vLsCh5WfQ2-bGjS7K-hW22EHLZ60sJFA2K8Vdw-Vw' alt='Mad Libs logo' />
        <h1>MADLIBS MADLIBS MADLIBS!</h1>
        <img src='https://lh3.googleusercontent.com/proxy/4ok0ki7ZkSw9fki_7QOUXXVmjOtRXlINP5XDOrvbXJe7MHvRs0mzU0hZu-fTD2lOUpWi0wtdYwryvdkQUY_she2vLsCh5WfQ2-bGjS7K-hW22EHLZ60sJFA2K8Vdw-Vw' alt='Mad Libs logo' />
      </header>
    );
  }
};
