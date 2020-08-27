import React from 'react';
import { shallow } from 'enzyme';

import {
    CharacterContainer,
    CharacterInfoDice,
    CharacterInfo,
    CharacterImage,
    CharacterName,
    CharacterDice
} from '../components'


describe('Actions Components', () => {
    it('CharacterContainer', () => {
        const wrapper = shallow(
            <CharacterContainer order={0}>ActionsContainer</CharacterContainer>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterInfoDice', () => {
        const wrapper = shallow(
            <CharacterInfoDice order={0}>ActionsInfo</CharacterInfoDice>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterInfo', () => {
        const wrapper = shallow(
            <CharacterInfo order={0}>GameOver</CharacterInfo>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterImage', () => {
        const wrapper = shallow(
            <CharacterImage src='coucou'>GameOver</CharacterImage>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('img').props().src).toEqual('coucou');
    })

    describe('CharacterName', () => {
        const wrapper = shallow(
            <CharacterName order={0}>
                CharacterName
            </CharacterName>
        );

        expect(wrapper).toMatchSnapshot();
    })

    it('CharacterImage', () => {
        const wrapper = shallow(
            <CharacterDice order={0} />
        );
        expect(wrapper).toMatchSnapshot();
    })
})