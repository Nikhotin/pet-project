import { createServer } from 'miragejs';
import items from '../lib/constants/items.json';
import { models } from './models';
import { factories } from './factories';
import { endpoints } from './endpoints';

export function startMirage() {
  const server = createServer({
    models,
    factories,
    fixtures: {
      products: items.data,
    },
    seeds(server) {
      server.loadFixtures('products');
    },
  });

  // logging
  server.logging = true;

  // internal URLs
  server.urlPrefix = process.env.REACT_APP_API_URL ?? '';
  for (const namespace of Object.keys(endpoints)) {
    // @ts-ignore
    endpoints[namespace](server);
  }

  // Reset for everything else
  server.namespace = '';
  server.passthrough();

  console.log({ dump: server.db.dump() });
}
