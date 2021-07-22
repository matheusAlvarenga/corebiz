import { createStore, action, persist } from 'easy-peasy';

const store = createStore(
    persist({
        cart: [],
        addToCart: action(state => {
            state.cart.push('1');
        }),
    })
);

export default store;
