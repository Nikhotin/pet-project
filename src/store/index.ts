import { createDomain } from 'effector';
import { readProducts } from '../services/endpoints';
import { Product } from '../services/types';

export enum SortTypes {
  ASC = 'asc',
  DESC = 'desc',
}

export interface CartItem {
  count: number;
  item: Product;
}

interface Cart {
  items: Array<CartItem>;
  total: number;
}

interface Store {
  products: Array<Product>;
  cart: Cart;
}

const storeName = 'store';
const initialState: Store = {
  products: [],
  cart: {
    items: [],
    total: 0,
  },
};

export const domain = createDomain();

export const fetchProductsFx = domain.effect(() => readProducts());

export const sortProductsByTime = domain.createEvent();
export const sortProductsByPrice = domain.createEvent<{ sortType: SortTypes }>();
export const toggleFavorite = domain.createEvent<{ productId: string }>();
export const addToCart = domain.createEvent<{ productId: string }>();
export const removeFromCart = domain.createEvent<{ productId: string; allItems?: boolean }>();
export const clearCart = domain.createEvent();

export const $store = domain
  .store(initialState, { name: storeName })
  .on(fetchProductsFx.doneData, (store, products) => ({
    ...store,
    products: products || [],
  }))
  .on(sortProductsByTime, (state) => {
    const products = [...state.products];
    products.sort((a, b) => Number(a.id) - Number(b.id));

    return { ...state, products };
  })
  .on(sortProductsByPrice, (state, { sortType }) => {
    const products = [...state.products];

    if (sortType === SortTypes.ASC) {
      products.sort((a, b) => a.price - b.price);
    } else {
      products.sort((a, b) => b.price - a.price);
    }

    return { ...state, products };
  })
  .on(toggleFavorite, (state, { productId }) => {
    const productIdx = state.products.findIndex((el) => el.id === productId);
    const newProducts = [...state.products];

    newProducts[productIdx].favorite = !newProducts[productIdx].favorite;

    return { ...state, products: newProducts };
  })
  .on(addToCart, (state, { productId }) => {
    const itemInCartIdx = state.cart.items.findIndex((el) => el.item.id === productId);

    if (itemInCartIdx === -1) {
      const productIdx = state.products.findIndex((el) => el.id === productId);
      const addedProduct = state.products[productIdx];

      return {
        ...state,
        cart: {
          items: [...state.cart.items, { item: addedProduct, count: 1 }],
          total: state.cart.total + addedProduct.price,
        },
      };
    }

    state.cart.items[itemInCartIdx].count += 1;
    const addedPrice = state.cart.items[itemInCartIdx].item.price;

    return {
      ...state,
      cart: {
        items: [...state.cart.items],
        total: state.cart.total + addedPrice,
      },
    };
  })
  .on(removeFromCart, (state, { productId, allItems }) => {
    const itemInCartIdx = state.cart.items.findIndex((el) => el.item.id === productId);

    if (state.cart.items[itemInCartIdx].count === 1 || allItems) {
      const newCartItems = state.cart.items.filter((el) => el.item.id !== productId);
      const removedPrice =
        state.cart.items[itemInCartIdx].item.price * state.cart.items[itemInCartIdx].count;

      return {
        ...state,
        cart: {
          items: [...newCartItems],
          total: state.cart.total - removedPrice,
        },
      };
    }

    state.cart.items[itemInCartIdx].count -= 1;
    const removedPrice = state.cart.items[itemInCartIdx].item.price;

    return {
      ...state,
      cart: {
        items: [...state.cart.items],
        total: state.cart.total - removedPrice,
      },
    };
  })
  .on(clearCart, (state) => {
    return {
      ...state,
      cart: {
        items: [],
        total: 0,
      },
    };
  });

export const $products = $store.map((state) => state.products);
export const $cartItems = $store.map((state) => state.cart.items);
export const $total = $store.map((state) => state.cart.total);
