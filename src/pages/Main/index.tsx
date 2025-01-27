import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $products, fetchProductsFx } from '../../store';
import GridList from '../../components/sections/GridList';
import ProductItem from '../../components/elements/ProductItem';
import SortButton from '../../components/elements/SortButton';
import styles from './Main.module.scss';
import { clsx } from 'clsx';
import styled from 'styled-components';

function MainPage() {
  const products = useStore($products);

  useEffect(() => {
    fetchProductsFx();
  }, []);

  return (
    <Wrapper>
      <SortButton />
      <GridList>
        {products.length ? products.map((el) => <ProductItem key={el.id} {...el} />) : <></>}
      </GridList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div:first-of-type {
    margin-bottom: 3.5rem;
    align-self: end;
  }
`;

export default MainPage;
