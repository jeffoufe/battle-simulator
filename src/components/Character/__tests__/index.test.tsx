import * as React from 'react';
import { shallow } from 'enzyme';
import Character from '..';
import { INITIAL_STATE } from '../../../reducers/game';
import { monsterRoll, endTurn } from '../../../reducers/game/actions';
import * as redux from "react-redux";

const mockDispatchFn = jest.fn()

describe('Actions', () => {
    beforeEach(() => {
        const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
        useDispatchSpy.mockReturnValue(mockDispatchFn);
    })

    it('Player attacks', () => {
        const rollAll = jest.fn();
        const useRefSpy = jest.spyOn(React, 'useRef');
        // @ts-ignore
        useRefSpy.mockReturnValue({ rollAll })

        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({ ...INITIAL_STATE.player, isRolling: true });

        jest.spyOn(React, 'useEffect').mockImplementation(f => f());

        const wrapper = shallow(
            <Character order={0} image='image' />
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(rollAll).toHaveBeenCalled();

        const rollDone: (result: number) => void = wrapper.find('CharacterDice').find('ForwardRef').prop('rollDone');
        rollDone(5);
        expect(mockDispatchFn).toHaveBeenCalledWith(monsterRoll(5));
    });

    it('Monster attacks', () => {
        const useSelectorSpy = jest.spyOn(redux, 'useSelector'); 
        useSelectorSpy.mockReturnValue({ ...INITIAL_STATE.monster });

        const wrapper = shallow(
            <Character order={1} image='image' />
        );
        
        expect(wrapper).toMatchSnapshot();
        const rollDone: (result: number) => void = wrapper.find('CharacterDice').find('ForwardRef').prop('rollDone');
        rollDone(3);
        expect(mockDispatchFn).toHaveBeenCalledWith(endTurn(3));
    })
});