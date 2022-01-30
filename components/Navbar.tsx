import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/home"}><a>Home</a></Link>
        </li>
        <li>
          <Link href={"/categories"}><a>Categories</a></Link>
        </li>
        <li>
          <Link href={"/specials"}><a>Specials</a></Link>
        </li>
        <li>
          <Link href={"/register"}><a>Register</a></Link>
        </li>
        <li>
          <Link href={"/login"}><a>Login</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
