import React from 'react';
import { ReactComponent as CounterArrow } from '../../../assets/icons/counterArrow.svg';
import { clsx } from 'clsx';
import styles from './Counter.module.scss';
import styled from 'styled-components';

interface CounterProps {
  value: string;
  increment: () => void;
  decrement: () => void;
}

function Counter({ value, increment, decrement }: CounterProps) {
  return (
    <Wrapper>
      <div>{value}</div>
      <Actions>
        <div onClick={increment}>
          <CounterArrow />
        </div>
        <div onClick={decrement}>
          <CounterArrow />
        </div>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @include title3;

  width: max-content;
  height: max-content;

  background-color: $gray-30;
  border-radius: 0.6rem;
  padding: 1rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.5rem;

  & > div:first-of-type {
    padding-left: 1.5rem;
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    color: $gray-45;

    cursor: pointer;
    will-change: color;
    transition: color 0.3s ease-in;

    &:hover {
      color: $gray-60;
    }

    &:last-of-type {
      transform: scale(-1);
    }
  }
`;

export default Counter;
