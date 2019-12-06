import {
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SET_CURRENT_USER
} from '../../actions/types';
import auth from '../../reducers/auth';

describe('Auth reducer', () => {
    it('should return new state if action type is SIGNUP_SUCCESS', () => {
        const payload = {
            data: {
                token: 'token',
                user: {}
            }
        };
        const state = {
            token: 'token',
            isAuthenticated: true,
            user: {}
        };
        const newSate = auth([], {
            type: SIGNUP_SUCCESS,
            payload
        });
        expect(newSate).toEqual(state);
    });

    it('should return new state if action type is SIGNUP_FAIL', () => {
        const newSate = auth([], {
            type: SIGNUP_FAIL
        });
        const state = {
            token: null,
            isAuthenticated: false
        };
        expect(newSate).toEqual(state);
    });

    it('should return new state if action type is SET_CURRENT_USER', () => {
        const payload = {
            id: 1,
            email: 'test@questioner.com',
            firstname: 'Test'
        };
        const newSate = auth([], {
            type: SET_CURRENT_USER,
            payload
        });
        const state = {
            isAuthenticated: true,
            user: payload
        };
        expect(newSate).toEqual(state);
    });
});
