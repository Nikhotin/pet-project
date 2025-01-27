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
import styled from 'styled-components';

function Header() {
  const navigate = useNavigate();
  const cartItems = useStore($cartItems);

  return (
    <Wrapper>
      <Title>Интерьер.</Title>
      <Actions>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          <Text>Каталог</Text>
          <Catalog className={clsx(styles.Icon)} />
        </div>
        <Popover trigger={TriggerTypes.Hover} content={<CheckoutList items={cartItems} forPopup />}>
          <div
            onClick={() => {
              navigate('/cart');
            }}
          >
            <Text>Корзина</Text>
            <Cart className={clsx(styles.Icon)} />
          </div>
        </Popover>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 1.6rem 0;
  margin-bottom: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: $gray-40;
  color: $white;

  @include media('max', 'sm') {
    padding: 5rem 1.6rem 1.6rem;
    margin-bottom: 1.6rem;
  }
`;

const Title = styled.div`
  @include title1;

  @include media('max', 'sm') {
    @include defaultText;
    font-weight: 600;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  & > div {
    @include hoverColor($white, $gray-30);
  }
`;

const Text = styled.span`
  @include defaultText;

  @include media('min', 'sm') {
    display: block;
  }

  @include media('max', 'sm') {
    display: none;
  }
`;

export default Header;
