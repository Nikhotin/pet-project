import React from 'react';
import { clsx } from 'clsx';
import { Product } from '../../../services/types';
import { ReactComponent as Bag } from '../../../assets/icons/bag.svg';
import { ReactComponent as Heart } from '../../../assets/icons/heart.svg';
import styles from './ProductItem.module.scss';
import { addToCart, toggleFavorite } from '../../../store';

function ProductItem({ id, favorite, full_image, name, price, description }: Product) {
  return (
    <div className={clsx(styles.Wrapper)}>
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
      <div className={clsx(styles.Footer)}>
        <div className={clsx(styles.Name)}>{name}</div>
        <div className={clsx(styles.Description)}>{description}</div>
        <div className={clsx(styles.Price)}>{price} руб.</div>
      </div>
    </div>
  );
}

export default ProductItem;
