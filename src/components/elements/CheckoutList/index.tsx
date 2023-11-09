import React from 'react';
import { CartItem } from '../../../store';
import Button, { ButtonTypes, ButtonVariables } from '../Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './CheckoutList.module.scss';
import CheckoutListItem from '../CheckoutListItem';

interface CheckoutListProps {
  items: Array<CartItem>;
  forPopup?: boolean;
}

function CheckoutList({ items, forPopup = false }: CheckoutListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  if (items.length === 0) {
    return (
      <div className={clsx(styles.EmptyWrapper, forPopup && styles.PopupWrapper)}>
        <div className={clsx(styles.EmptyTitle)}>Корзина пуста</div>
        {location.pathname !== '/' ? (
          <Button
            text="Добавьте товары на странице каталога"
            type={ButtonTypes.Text}
            variable={ButtonVariables.Secondary}
            onClick={() => {
              navigate('/');
            }}
          />
        ) : (
          <></>
        )}
      </div>
    );
  }

  return (
    <div className={clsx(styles.Wrapper, forPopup && styles.PopupWrapper)}>
      {!forPopup ? (
        <div className={clsx(styles.Header)}>
          <div>Товар</div>
          <div>К-во</div>
        </div>
      ) : (
        <></>
      )}
      <div>
        {items.map((el) => (
          <CheckoutListItem item={el} forPopup={forPopup} key={el.item.id} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutList;
