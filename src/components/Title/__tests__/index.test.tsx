import React from 'react';
import { shallow } from 'enzyme';
import Title from '..';

describe('Title', () => {
    it('Title', () => {
        const wrapper = shallow(
            <Title>Title</Title>
        );
        expect(wrapper).toMatchSnapshot();
    })
})