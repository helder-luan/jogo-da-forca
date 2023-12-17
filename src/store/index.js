import Vuex from 'vuex';

import modules from './modules';
import rootStore from './root';

export { Vuex };

export default new Vuex.Store({
  modules,
  ...rootStore,
});
