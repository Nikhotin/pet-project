import React from 'react';
import { ReactComponent as CounterArrow } from '../../../assets/icons/counterArrow.svg';
import { clsx } from 'clsx';
import styles from './Counter.module.scss';

interface CounterProps {
  value: string;
  increment: () => void;
  decrement: () => void;
}

function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <div className={clsx(styles.Wrapper)}>
      <div>{value}</div>
      <div className={clsx(styles.Actions)}>
        <div onClick={increment}>
          <CounterArrow />
        </div>
        <div onClick={decrement}>
          <CounterArrow />
        </div>
      </div>
    </div>
  );
}

export default Counter;
