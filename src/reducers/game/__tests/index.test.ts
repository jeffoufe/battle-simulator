import gameReducer, { INITIAL_STATE } from '..';
import {
    clickAttack,
    resetGame,
    monsterRoll,
    endTurn,
    allRollsDone,
    computeTurn,
    resetTurn
} from '../actions';

describe('Game Reducer', () => {
    it('PLAYER_ROLL', () => {
        expect(gameReducer(INITIAL_STATE, clickAttack())).toEqual({
            isTurnActive: true,
            monster: INITIAL_STATE.monster,
            player: {
                ...INITIAL_STATE.player,
                isRolling: true
            }
        })
    })

    it('MONSTER_ROLL', () => {
        expect(gameReducer(INITIAL_STATE, monsterRoll(5))).toEqual({
            isTurnActive: false,
            monster: {
                ...INITIAL_STATE.monster,
                isRolling: true
            },
            player: {
                ...INITIAL_STATE.player,
                result: 5
            }
        })
    })

    it('ALL_ROLLS_DONE', () => {
        expect(gameReducer(INITIAL_STATE, allRollsDone(3))).toEqual({
            isTurnActive: false,
            monster: {
                ...INITIAL_STATE.monster,
                result: 3
            },
            player: INITIAL_STATE.player,
        })
    })

    it('COMPUTE_TURN', () => {
        const playerLostState = {
            ...INITIAL_STATE,
            player: {
                ...INITIAL_STATE.player,
                result: 4
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 6
            }
        }

        expect(gameReducer(playerLostState, computeTurn())).toEqual({
            isTurnActive: false,
            player: {
                ...INITIAL_STATE.player,
                result: 4,
                health: 98
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 6,
            }
        })

        playerLostState.player.result = 9;

        expect(gameReducer(playerLostState, computeTurn())).toEqual({
            isTurnActive: false,
            player: {
                ...INITIAL_STATE.player,
                result: 9,
            },
            monster: {
                ...INITIAL_STATE.monster,
                result: 6,
                health: 97
            }
        })
    })

    const alteredState = {
        ...INITIAL_STATE,
        monster: {
            ...INITIAL_STATE.player,
            result: 4,
            health: 97
        }
    }

    it('RESET_TURN', () => {
        expect(gameReducer(alteredState, resetTurn())).toEqual({
            isTurnActive: false,
            monster: {
                ...INITIAL_STATE.monster,
                result: 0,
                health: 97
            },
            player: INITIAL_STATE.player,
        })
    })

    it('RESET_GAME', () => {
        expect(gameReducer(alteredState, resetGame())).toEqual(INITIAL_STATE)
    })
})