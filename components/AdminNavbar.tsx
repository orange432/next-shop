import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

const AdminNavbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href={"/admin"}><a>Dashboard</a></Link>
        </li>
        <li>
          <Link href={"/admin/items"}><a>Items</a></Link>
        </li>
        <li>
          <Link href={"/admin/orders"}><a>Orders</a></Link>
        </li>
        <li>
          <Link href={"/admin/users"}><a>Users</a></Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
