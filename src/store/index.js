import { createStore } from 'vuex';

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import cartModule from './cart/index';
import productModule from './products';

const store = createStore({
    modules: {
        cart: cartModule,
        products: productModule
    },
    state() {
        return {
            isLoggedIn: true
        }
    },
    mutations: mutations,
    getters: getters,
    actions: actions,
})

export default store;