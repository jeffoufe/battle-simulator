import { 
    PLAYER_ROLL, 
    RESET_GAME,
    MONSTER_ROLL,
    END_TURN,
    ALL_ROLLS_DONE,
    COMPUTE_TURN,
    RESET_TURN
} from './constants';

export const clickAttack = () => ({
    type: PLAYER_ROLL
})

export const resetGame = () => ({
    type: RESET_GAME
})

export const monsterRoll = (result: number) => ({
    type: MONSTER_ROLL,
    payload: { result }
})

export const allRollsDone = (result: number) => ({
    type: ALL_ROLLS_DONE,
    payload: { result }
})

export const computeTurn = () => ({
    type: COMPUTE_TURN
})

export const resetTurn = () => ({
    type: RESET_TURN
})

export const endTurn = (result: number) => ({
    type: END_TURN,
    payload: { result }
})