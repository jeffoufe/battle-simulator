import React from 'react';
import { shallow } from 'enzyme';
import { 
    CharacterHealthContainer,
    CharacterHealthIndicatorContainer,
    CharacterHealthIndicator,
    CharacterHealthPoints
} from '../components'

describe('CharacterHealth Components', () => {
    it('CharacterHealthContainer', () => {
        const wrapper = shallow(
            <CharacterHealthContainer />
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterHealthIndicatorContainer', () => {
        const wrapper = shallow(
            <CharacterHealthIndicatorContainer />
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterHealthIndicator', () => {
        const wrapper = shallow(
            <CharacterHealthIndicator health={50} />
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterHealthPoints', () => {
        const wrapper = shallow(
            <CharacterHealthPoints>
                5
            </CharacterHealthPoints>
        );
        expect(wrapper).toMatchSnapshot();
    })
})