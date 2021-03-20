import { USERS_LOAD_SUCCESS } from "./actions";


export function usersReducer(state = [], action) {
    switch (action.type) {
        case USERS_LOAD_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}
