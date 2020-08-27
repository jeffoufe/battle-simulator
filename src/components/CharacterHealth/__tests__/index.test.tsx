import React from 'react';
import { shallow } from 'enzyme';
import CharacterHealth from '..';
import * as redux from 'react-redux';
import { INITIAL_STATE } from '../../../reducers/game';

describe('CharacterHealth', () => {
    it('No dices rolled', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue(INITIAL_STATE);

        const wrapper = shallow(
            <CharacterHealth health={50} order={1} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('CharacterHealthPoints').at(0).text()).toEqual('');
    })

    it('Dices rolled', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({ 
            ...INITIAL_STATE,
            player: {
                ...INITIAL_STATE.player,
                result: 3
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 5
            }
        });

        const wrapper = shallow(
            <CharacterHealth health={50} order={0} />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('CharacterHealthPoints').at(0).text()).toEqual('-2');
    })
})