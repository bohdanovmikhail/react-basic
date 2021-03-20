import { INPUT_CHANGE, INPUT_CLEAR } from './actions';

export function inputDataReducer(state = '', action) {
    switch (action.type) {
        case INPUT_CHANGE:
            return action.payload;

        case INPUT_CLEAR:
            return '';

        default:
            return state;
    }
}
