import React from 'react';
import { shallow } from 'enzyme';
import Actions from '..';
import { INITIAL_STATE } from '../../../reducers/game';
import { clickAttack, resetGame } from '../../../reducers/game/actions';
import * as redux from "react-redux";

const mockDispatchFn = jest.fn()

describe('Actions', () => {
    beforeEach(() => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
        useDispatchSpy.mockReturnValue(mockDispatchFn);
    })

    it('Game start', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue(INITIAL_STATE);

        const wrapper = shallow(
            <Actions />
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(0);
        expect(wrapper.find('Victory').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').length).toEqual(0);
        expect(wrapper.find('AttackButton').length).toEqual(1);

        wrapper.find('AttackButton').prop('onClick')();
        expect(mockDispatchFn).toHaveBeenCalledWith(clickAttack());
    })

    it('Dices drawn - Player Hits', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({
            isTurnActive: true,
            player: {
                ...INITIAL_STATE.player,
                result: 6
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 3
            }
        });

        const wrapper = shallow(
            <Actions />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(0);
        expect(wrapper.find('Victory').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').length).toEqual(1);
        expect(wrapper.find('AttackButton').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').text()).toEqual('You Hit For 3');
    })

    it('Dices drawn - Monster Hits', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({
            isTurnActive: true,
            player: {
                ...INITIAL_STATE.player,
                result: 5
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 6
            }
        });

        const wrapper = shallow(
            <Actions />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(0);
        expect(wrapper.find('Victory').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').length).toEqual(1);
        expect(wrapper.find('AttackButton').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').text()).toEqual('You Are Hit For 1');
    })

    it('Dices drawn - Monster Hits', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({
            isTurnActive: true,
            player: {
                ...INITIAL_STATE.player,
                result: 5
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 5
            }
        });

        const wrapper = shallow(
            <Actions />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(0);
        expect(wrapper.find('Victory').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').length).toEqual(1);
        expect(wrapper.find('AttackButton').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').text()).toEqual('Draw Turn');
    })

    it('Game Over', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({
            ...INITIAL_STATE,
            player: {
                ...INITIAL_STATE.player,
                health: 0
            }
        });

        const wrapper = shallow(
            <Actions />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(1);
        expect(wrapper.find('Victory').length).toEqual(0);
        expect(wrapper.find('ActionsInfo').length).toEqual(0);
        expect(wrapper.find('AttackButton').length).toEqual(1);
        wrapper.find('AttackButton').prop('onClick')();
        expect(mockDispatchFn).toHaveBeenCalledWith(resetGame());
    })

    it('Victory', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({
            ...INITIAL_STATE,
            monster: {
                ...INITIAL_STATE.monster,
                health: 0
            }
        });

        const wrapper = shallow(
            <Actions />
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GameOver').length).toEqual(0);
        expect(wrapper.find('Victory').length).toEqual(1);
        expect(wrapper.find('ActionsInfo').length).toEqual(0);
        expect(wrapper.find('AttackButton').length).toEqual(1);
        wrapper.find('AttackButton').prop('onClick')();
        expect(mockDispatchFn).toHaveBeenCalledWith(resetGame());
    })
})

