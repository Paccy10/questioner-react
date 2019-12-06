import { SET_ALERT, REMOVE_ALERT } from '../../actions/types';
import alert from '../../reducers/alert';

describe('Alert reducer', () => {
    it('should return new state if action type is SET_ALERT', () => {
        const payload = {
            message: 'resource created',
            alertType: 'success'
        };
        const newSate = alert([], {
            type: SET_ALERT,
            payload
        });
        expect(newSate).toEqual(payload);
    });

    it('should return new state if action type is REMOVE_ALERT', () => {
        const newSate = alert([], {
            type: REMOVE_ALERT
        });
        expect(newSate).toEqual({});
    });
});
