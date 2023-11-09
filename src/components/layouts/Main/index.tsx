import React from 'react';
import Header from '../../sections/Header';
import { Outlet } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <div className={clsx(styles.Wrapper)}>
      <Header />
      <div className={clsx(styles.Content)}>
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
