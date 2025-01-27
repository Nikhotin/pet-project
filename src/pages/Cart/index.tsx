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
import styled from 'styled-components';

function CartPage() {
  const navigate = useNavigate();
  const cartItems = useStore($cartItems);
  const total = useStore($total);

  return (
    <Wrapper>
      <div>
        <CheckoutList items={cartItems} />
        <Actions>
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
        </Actions>
      </div>
      <Checkout total={total} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;

  @include media('max', 'md') {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin-top: 2rem;

  @include media('max', 'md') {
    margin-top: 1rem;
  }
`;

export default CartPage;
