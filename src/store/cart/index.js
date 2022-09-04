import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const cartModule = {
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 },
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions
}

export default cartModule;