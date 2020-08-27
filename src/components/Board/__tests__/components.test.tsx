import React from 'react';
import { shallow } from 'enzyme';
import { BoardContainer } from '../components'

describe('Board Components', () => {
    it('BoardContainer', () => {
        const wrapper = shallow(
            <BoardContainer />
        );
        expect(wrapper).toMatchSnapshot();
    })
})