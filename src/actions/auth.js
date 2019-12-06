import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setAlert } from './alert';
import { CONFIG } from './constants';
import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    SET_CURRENT_USER
} from './types';
import setAuthToken from '../helpers/setAuthToken';

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded.user
    };
};

export const signup = ({
    firstname,
    lastname,
    othername,
    email,
    password
}) => async dispatch => {
    const body = JSON.stringify({
        firstname,
        lastname,
        othername,
        email,
        password
    });

    try {
        const res = await axios.post('/auth/signup', body, CONFIG);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });
        const { token } = res.data.data;
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));
    } catch (error) {
        if (error.response) {
            const err = error.response.data;
            dispatch(setAlert(err.message, 'danger'));
        }

        dispatch({
            type: SIGNUP_FAIL
        });
    }
};

export const login = ({ email, password }) => async dispatch => {
    const body = JSON.stringify({
        email,
        password
    });

    try {
        const res = await axios.post('/auth/login', body, CONFIG);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
        const { token } = res.data.data;
        setAuthToken(token);
        const decoded = jwtDecode(token);
        dispatch(setCurrentUser(decoded));
    } catch (error) {
        if (error.response) {
            const err = error.response.data;
            dispatch(setAlert(err.message, 'danger'));
        }

        dispatch({
            type: LOGIN_FAIL
        });
    }
};
