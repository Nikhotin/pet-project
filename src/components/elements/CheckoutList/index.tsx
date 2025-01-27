import React from 'react';
import { CartItem } from '../../../store';
import Button, { ButtonTypes, ButtonVariables } from '../Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { clsx } from 'clsx';
import styles from './CheckoutList.module.scss';
import CheckoutListItem from '../CheckoutListItem';
import styled from 'styled-components';

interface CheckoutListProps {
  items: Array<CartItem>;
  forPopup?: boolean;
}

function CheckoutList({ items, forPopup = false }: CheckoutListProps) {
  const navigate = useNavigate();
  const location = useLocation();

  if (items.length === 0) {
    return (
      <EmptyWrapper className={clsx(forPopup && styles.PopupWrapper)}>
        <EmptyTitle>Корзина пуста</EmptyTitle>
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
      </EmptyWrapper>
    );
  }

  return (
    <Wrapper className={clsx(forPopup && styles.PopupWrapper)}>
      {!forPopup ? (
        <Header>
          <div>Товар</div>
          <div>К-во</div>
        </Header>
      ) : (
        <></>
      )}
      <div>
        {items.map((el) => (
          <CheckoutListItem item={el} forPopup={forPopup} key={el.item.id} />
        ))}
      </div>
    </Wrapper>
  );
}

const PopupWrapper = styled.div`
  padding: 3.2rem;
`;

const EmptyWrapper = styled.div`
  min-width: 25rem;
`;

const EmptyTitle = styled.div`
  @include text1;
  color: $black;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 8rem;

  margin-bottom: 1.5rem;
`;

export default CheckoutList;
