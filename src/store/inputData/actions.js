export const INPUT_CHANGE = 'INPUT_CHANGE';
export const INPUT_CLEAR = 'INPUT_CLEAR';

export const inputChange = inputValue => ({
    type: INPUT_CHANGE,
    payload: inputValue,
});

export const inputClear = () => ({
    type: INPUT_CLEAR,
});
