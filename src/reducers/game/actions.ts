import { 
    PLAYER_ROLL, 
    RESET_GAME,
    MONSTER_ROLL,
    END_TURN
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

export const endTurn = (result: number) => ({
    type: END_TURN,
    payload: { result }
})