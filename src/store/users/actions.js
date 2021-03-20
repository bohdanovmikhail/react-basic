export const USERS_LOAD = 'USERS_LOAD';
export const USERS_LOAD_SUCCESS = 'USERS_LOAD_SUCCESS';
export const USERS_LOAD_FAILED = 'USERS_LOAD_FAILED';


export const loadUserSuccess = users => ({
    type: USERS_LOAD_SUCCESS,
    payload: users,
});

export const loadUsersFailed = error => ({
    type: USERS_LOAD_FAILED,
    error: error,
});

export const usersLoad = () => dispatch => {
    dispatch({
        type: 'BEFORE_setTimeout',
    });

    fetch('https://600d9cedf979dd001745ce20.mockapi.io/users')
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            throw new Error('Users not found');
        })
        .then(result => {
            const action = loadUserSuccess(result);
            dispatch(action);
        })
        .catch(error => {
            dispatch(loadUsersFailed(error));
        })
};
