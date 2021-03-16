import { createStore } from 'redux';

const defaultState = {
    counter: 1,
};

function rootReducer(state = defaultState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counter: state.counter + 1,
            };

        case 'DECREMENT':
            return {
                ...state,
                counter: state.counter - 1,
            };

        default:
            return state;
    }
}

export const store = createStore(rootReducer);