import React from 'react';
import Counter from '../Counter';
import { addToCart, CartItem, removeFromCart, toggleFavorite } from '../../../store';
import { clsx } from 'clsx';
import styles from './CheckoutListItem.module.scss';
import Button, { ButtonTypes, ButtonVariables } from '../Button';

interface CheckoutListItemProps {
  item: CartItem;
  forPopup?: boolean;
}

function CheckoutListItem({ item, forPopup = false }: CheckoutListItemProps) {
  return (
    <div className={clsx(styles.Wrapper, forPopup && styles.PopupWrapper)}>
      <div className={clsx(styles.LeftSide)}>
        <img className={clsx(styles.Image)} src={item.item.cart_image} alt={item.item.id} />
        <div className={clsx(styles.ItemData)}>
          <div className={clsx(styles.Name)}>{item.item.name}</div>
          <div className={clsx(styles.Description)}>{item.item.description}</div>
          <div className={clsx(styles.Price)}>{item.item.price} руб.</div>
          <div className={clsx(styles.Actions)}>
            <Button
              text={item.item.favorite ? 'В избранном' : 'Избранные'}
              type={ButtonTypes.Text}
              variable={ButtonVariables.Primary}
              onClick={() => {
                toggleFavorite({ productId: item.item.id });
              }}
            />
            <Button
              text="Удалить"
              type={ButtonTypes.Text}
              variable={ButtonVariables.Primary}
              onClick={() => {
                removeFromCart({ productId: item.item.id, allItems: true });
              }}
            />
          </div>
        </div>
      </div>
      <Counter
        value={item.count.toString()}
        increment={() => {
          addToCart({ productId: item.item.id });
        }}
        decrement={() => {
          removeFromCart({ productId: item.item.id });
        }}
      />
    </div>
  );
}

export default CheckoutListItem;
