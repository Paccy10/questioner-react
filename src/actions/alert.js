import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (message, alertType, timeout = 10000) => dispatch => {
    dispatch({
        type: SET_ALERT,
        payload: { message, alertType }
    });

    setTimeout(() => dispatch({ type: REMOVE_ALERT }), timeout);
};

export const removeAlert = () => dispatch => {
    dispatch({ type: REMOVE_ALERT });
};
