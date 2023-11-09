import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { $products, fetchProductsFx } from '../../store';
import GridList from '../../components/sections/GridList';
import ProductItem from '../../components/elements/ProductItem';
import SortButton from '../../components/elements/SortButton';
import styles from './Main.module.scss';
import { clsx } from 'clsx';

function MainPage() {
  const products = useStore($products);

  useEffect(() => {
    fetchProductsFx();
  }, []);

  return (
    <div className={clsx(styles.Wrapper)}>
      <SortButton />
      <GridList>
        {products.length ? products.map((el) => <ProductItem key={el.id} {...el} />) : <></>}
      </GridList>
    </div>
  );
}

export default MainPage;
