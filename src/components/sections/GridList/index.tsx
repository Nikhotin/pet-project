import React, { ReactNode } from 'react';
import clsx from 'clsx';
import styles from './GridList.module.scss';

interface GridListProps {
  children: ReactNode;
}

function GridList({ children }: GridListProps) {
  return <div className={clsx(styles.Wrapper)}>{children}</div>;
}

export default GridList;
