import React from 'react';
import { shallow } from 'enzyme';
import ButtonSpinner from '../../../components/common/ButtonSpinner';

describe('ButtonSpinner Component', () => {
    it('renders without crashing', () => {
        const component = shallow(<ButtonSpinner />);
        expect(component).toMatchSnapshot();
    });
});
