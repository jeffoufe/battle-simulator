import React from 'react';
import { shallow } from 'enzyme';

import {
    ActionsContainer,
    ActionsInfo,
    GameOver,
    Victory,
    AttackButton
} from '../components'

describe('Actions Components', () => {
    it('ActionsContainer', () => {
        const wrapper = shallow(
            <ActionsContainer>ActionsContainer</ActionsContainer>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('ActionsInfo', () => {
        const wrapper = shallow(
            <ActionsInfo>ActionsInfo</ActionsInfo>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('GameOver', () => {
        const wrapper = shallow(
            <GameOver>GameOver</GameOver>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('Victory', () => {
        const wrapper = shallow(
            <Victory>GameOver</Victory>
        );
        expect(wrapper).toMatchSnapshot();
    })

    describe('AttackButton', () => {
        const testFn = jest.fn();
        const wrapper = shallow(
            <AttackButton onClick={testFn}>
                AttackButton
            </AttackButton>
        );

        it('Snapshot', () => {
            expect(wrapper).toMatchSnapshot();
        })

        it('OnClick', () => {
            wrapper.find('button').simulate('click');
            expect(testFn).toHaveBeenCalled();
        })
    })
})