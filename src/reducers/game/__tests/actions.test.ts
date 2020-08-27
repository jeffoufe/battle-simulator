import {
    clickAttack,
    resetGame,
    monsterRoll,
    endTurn,
    allRollsDone,
    computeTurn,
    resetTurn
} from '../actions';

import { 
    PLAYER_ROLL, 
    RESET_GAME,
    MONSTER_ROLL,
    ALL_ROLLS_DONE,
    COMPUTE_TURN,
    END_TURN,
    RESET_TURN
} from '../constants';

describe('Game Reducer actions', () => {
    it('clickAttack', () => {
        expect(clickAttack()).toEqual({
            type: PLAYER_ROLL
        })
    })

    it('resetGame', () => {
        expect(resetGame()).toEqual({
            type: RESET_GAME
        })
    })

    it('monsterRoll', () => {
        expect(monsterRoll(5)).toEqual({
            type: MONSTER_ROLL,
            payload: { result: 5 }
        })
    })

    it('endTurn', () => {
        expect(endTurn(3)).toEqual({
            type: END_TURN,
            payload: { result: 3 }
        })
    })

    it('allRollsDone', () => {
        expect(allRollsDone(2)).toEqual({
            type: ALL_ROLLS_DONE,
            payload: { result: 2 }
        })
    })

    it('computeTurn', () => {
        expect(computeTurn()).toEqual({
            type: COMPUTE_TURN
        })
    })

    it('resetTurn', () => {
        expect(resetTurn()).toEqual({
            type: RESET_TURN
        })
    })
})