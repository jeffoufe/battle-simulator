import React from 'react';
import { shallow } from 'enzyme';
import Board from '..'

describe('Board Components', () => {
    it('BoardContainer', () => {
        const wrapper = shallow(
            <Board />
        );
        expect(wrapper).toMatchSnapshot();
    })
})