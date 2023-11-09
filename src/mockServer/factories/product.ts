import { Factory } from 'miragejs';
import { Product } from '../../services/types';

export const productFactory = Factory.extend<Product>({
  id(i) {
    return i.toString();
  },
  name() {
    return 'name';
  },
  description() {
    return 'description';
  },
  price() {
    return 0;
  },
  full_image() {
    return 'image1';
  },
  cart_image() {
    return 'image2';
  },
  favorite() {
    return false;
  },
});
