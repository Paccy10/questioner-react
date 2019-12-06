import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../../components/common/Button';

const props = {
    value: 'Submit',
    className: 'btn',
    type: 'submit'
};

describe('Button Component', () => {
    it('renders without crashing', () => {
        const component = shallow(<Button {...props} />);
        expect(component).toMatchSnapshot();
    });
});
