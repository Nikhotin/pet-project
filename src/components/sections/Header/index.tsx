import React from 'react';
import { ReactComponent as Cart } from '../../../assets/icons/cart.svg';
import { ReactComponent as Catalog } from '../../../assets/icons/catalog.svg';
import { useNavigate } from 'react-router-dom';
import Popover, { TriggerTypes } from '../../elements/Popover';
import { useStore } from 'effector-react';
import { $cartItems } from '../../../store';
import clsx from 'clsx';
import styles from './Header.module.scss';
import CheckoutList from '../../elements/CheckoutList';

function Header() {
  const navigate = useNavigate();
  const cartItems = useStore($cartItems);

  return (
    <div className={clsx(styles.Wrapper)}>
      <div className={clsx(styles.Title)}>Интерьер.</div>
      <div className={clsx(styles.Actions)}>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          <span className={clsx(styles.Text)}>Каталог</span>
          <Catalog className={clsx(styles.Icon)} />
        </div>
        <Popover trigger={TriggerTypes.Hover} content={<CheckoutList items={cartItems} forPopup />}>
          <div
            onClick={() => {
              navigate('/cart');
            }}
          >
            <span className={clsx(styles.Text)}>Корзина</span>
            <Cart className={clsx(styles.Icon)} />
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default Header;
