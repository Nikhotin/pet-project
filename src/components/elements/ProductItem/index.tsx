import React from 'react';
import { clsx } from 'clsx';
import { Product } from '../../../services/types';
import { ReactComponent as Bag } from '../../../assets/icons/bag.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';
import styles from './ProductItem.module.scss';
import { addToCart, toggleFavorite } from '../../../store';
import styled from 'styled-components';

function ProductItem({ id, favorite, full_image, name, price, description }: Product) {
  return (
    <Wrapper>
      <div className={clsx(styles.ImageWrapper)}>
        <img className={clsx(styles.Image)} src={full_image} alt={id} />
        <div className={clsx(styles.ImageActions)}>
          <Bag
            onClick={() => {
              addToCart({ productId: id });
            }}
          />
          <Heart
            className={clsx(favorite && styles.ActiveFavorite)}
            onClick={() => {
              toggleFavorite({ productId: id });
            }}
          />
        </div>
      </div>
      <Footer>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Price>{price} руб.</Price>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40rem;
`;

const Footer = styled.div`
  @include media('max', 'sm') {
    padding: 0 1.2rem;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 25rem;
  object-fit: cover;

  will-change: filter;
  transition: filter 0.3s ease-in;
`;

const Name = styled.div`
  @include text1;

  margin-bottom: 1rem;
`;

const Description = styled.div`
  @include description;

  color: $gray-60;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  @include text1;

  color: $gray-90;
  margin-bottom: 1rem;
`;

export default ProductItem;
