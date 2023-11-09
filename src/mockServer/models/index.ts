import { Model } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import { Product } from '../../services/types';

const ProductModel: ModelDefinition<Product> = Model.extend({});

export const models = {
  product: ProductModel,
};
