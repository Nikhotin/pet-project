import React from 'react';
import Counter from '../Counter';
import { addToCart, CartItem, removeFromCart, toggleFavorite } from '../../../store';
import { clsx } from 'clsx';
import styles from './CheckoutListItem.module.scss';
import Button, { ButtonTypes, ButtonVariables } from '../Button';
import styled from 'styled-components';

interface CheckoutListItemProps {
  item: CartItem;
  forPopup?: boolean;
}

function CheckoutListItem({ item, forPopup = false }: CheckoutListItemProps) {
  return (
    <Wrapper className={clsx(forPopup && styles.PopupWrapper)}>
      <LeftSide>
        <Image src={item.item.cart_image} alt={item.item.id} />
        <ItemData>
          <Name>{item.item.name}</Name>
          <Description>{item.item.description}</Description>
          <Price>{item.item.price} руб.</Price>
          <Actions>
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
          </Actions>
        </ItemData>
      </LeftSide>
      <Counter
        value={item.count.toString()}
        increment={() => {
          addToCart({ productId: item.item.id });
        }}
        decrement={() => {
          removeFromCart({ productId: item.item.id });
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 8rem;
  gap: 1rem;

  padding: 3rem 0;
  color: $black;

  border-top: 0.05rem solid $gray-45;

  @include media('max', 'sm') {
    padding: 2rem 0;
  }
`;

const LeftSide = styled.div`
  display: flex;
  gap: 3rem;
`;

const Image = styled.img`
  width: 17rem;
  height: 17rem;
  object-fit: cover;

  @include media('max', 'sm') {
    display: none;
  }
`;

const ItemData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Name = styled.div`
  @include text1;
`;

const Description = styled.div`
  @include description;

  color: $gray-60;
`;

const Price = styled.div`
  @include text3;

  color: $gray-90;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default CheckoutListItem;
