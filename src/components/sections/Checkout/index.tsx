import React, { useState } from 'react';
import { clsx } from 'clsx';
import styles from './Checkout.module.scss';
import Button, { ButtonSizes, ButtonTypes, ButtonVariables } from '../../elements/Button';
import Input from '../../elements/Input';
import { toast } from 'react-toastify';
import { clearCart } from '../../../store';
import { useNavigate } from 'react-router-dom';

interface CheckoutProps {
  total: number;
}

function Checkout({ total }: CheckoutProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');

  const checkoutHandler = () => {
    const toastMessage = (
      <div>
        <div>Заказ оформлен!</div>
        <div>На имя: {name}</div>
        <div>Телефон: {phone}</div>
        <div>По адресу {address}</div>
        <Button
          text="Очистить корзину и составить новый заказ"
          type={ButtonTypes.Text}
          variable={ButtonVariables.Secondary}
          onClick={() => {
            setName('');
            setPhone('');
            setAddress('');
            clearCart();
            navigate('/');
          }}
        />
      </div>
    );
    toast.success(toastMessage);
  };

  return (
    <div className={clsx(styles.Wrapper)}>
      <div className={clsx(styles.Title)}>Оформление заказа</div>
      <div className={clsx(styles.Form)}>
        <Input
          value={name}
          name="name"
          type="text"
          placeholder="Имя Фамилия"
          onChange={(val) => setName(val)}
        />
        <Input
          value={phone}
          name="phone"
          type="text"
          placeholder="+ 7 904 000 80 80"
          onChange={(val) => setPhone(val)}
        />
        <Input
          value={address}
          name="address"
          type="text"
          placeholder="Адрес доставки"
          onChange={(val) => setAddress(val)}
        />
      </div>
      <div className={clsx(styles.Total)}>
        <span>Итого: </span>
        <span>{total} руб.</span>
      </div>
      <Button
        text="Оформить заказ"
        variable={ButtonVariables.Secondary}
        size={ButtonSizes.Large}
        type={ButtonTypes.Button}
        fullWidth
        onClick={checkoutHandler}
      />
    </div>
  );
}

export default Checkout;
