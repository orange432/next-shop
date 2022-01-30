import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import styles from '../styles/Login.module.scss'

const Login = () => {
  return (
    <div>
      <Head>
        <title>Next Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main className={styles.main}>
        
      </main>
    </div>
  )
};

export default Login;
