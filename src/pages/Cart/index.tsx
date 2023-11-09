import React from 'react';
import { useStore } from 'effector-react';
import { useNavigate } from 'react-router-dom';
import { $cartItems, $total, clearCart } from '../../store';
import CheckoutList from '../../components/elements/CheckoutList';
import Checkout from '../../components/sections/Checkout';
import Button, {
  ButtonSizes,
  ButtonTypes,
  ButtonVariables,
} from '../../components/elements/Button';
import { clsx } from 'clsx';
import styles from './Cart.module.scss';

function CartPage() {
  const navigate = useNavigate();
  const cartItems = useStore($cartItems);
  const total = useStore($total);

  return (
    <div className={clsx(styles.Wrapper)}>
      <div>
        <CheckoutList items={cartItems} />
        <div className={clsx(styles.Actions)}>
          {cartItems.length ? (
            <>
              <Button
                text="Очистить корзину"
                size={ButtonSizes.Medium}
                variable={ButtonVariables.Secondary}
                type={ButtonTypes.Button}
                onClick={() => {
                  clearCart();
                }}
              />
              <Button
                text="Продолжить покупки"
                size={ButtonSizes.Medium}
                variable={ButtonVariables.Primary}
                type={ButtonTypes.Button}
                onClick={() => {
                  navigate('/');
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Checkout total={total} />
    </div>
  );
}

export default CartPage;
