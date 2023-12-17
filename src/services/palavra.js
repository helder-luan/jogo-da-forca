import { HTTPClient } from '../utils/request';

export default {
  // create: ({ payload }) => HTTPClient.post('/palavra', payload),
  get: () => HTTPClient.get('/random'),
};
