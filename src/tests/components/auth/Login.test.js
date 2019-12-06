import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../../components/auth/Login';

const props = {
    setAlert: jest.fn(),
    login: jest.fn(),
    history: {
        push: jest.fn()
    }
};

describe('Login Component', () => {
    const component = shallow(<Login {...props} />);

    it('should render without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onSubmit method when the button is clicked', () => {
        const spy = jest.spyOn(component.instance(), 'onSubmit');
        component.instance().forceUpdate();

        const fakeEvent = { preventDefault: () => {} };
        const form = component.find('form');
        form.simulate('submit', fakeEvent);
        expect(form.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should call onChange method when the input value is changed', () => {
        const spy = jest.spyOn(component.instance(), 'onChange');
        component.instance().forceUpdate();

        const event = {
            target: { value: 'email' }
        };

        const input = component.find('Input').at(0);
        input.simulate('change', event);
        expect(input.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should call componentWillReceiveProps', () => {
        const auth = {
            token: 'token',
            isAuthenticated: true,
            user: {}
        };
        component.setProps({ auth });
        const { props } = component.instance();
        expect(props.auth).toBe(auth);
    });
});
