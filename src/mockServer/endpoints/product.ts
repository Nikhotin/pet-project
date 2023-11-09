import { Response, Server } from 'miragejs';
import { AppSchema } from '../types';

export function routesForProducts(server: Server) {
  server.get(`/products`, (schema: AppSchema, request) => {
    const products = schema.all('product');
    return new Response(200, {}, products);
  });
}
