import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '../../../components/modals/Alert';

const props = {
    alert: { message: 'resource created.', alertType: 'success' },
    removeAlert: jest.fn()
};

describe('Alert Component', () => {
    const component = shallow(<Alert {...props} />);
    it('renders without crashing', () => {
        expect(component).toMatchSnapshot();
    });

    it('should call onClose method when the button is clicked', () => {
        const spy = jest.spyOn(component.instance(), 'onClose');
        component.instance().forceUpdate();

        const closer = component.find('.close').at(0);
        closer.simulate('click');
        expect(closer.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });
});
