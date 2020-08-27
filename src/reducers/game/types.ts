import {
    PLAYER_ROLL,
    MONSTER_ROLL,
    ALL_ROLLS_DONE,
    RESET_TURN,
    COMPUTE_TURN,
    RESET_GAME
} from './constants';

export interface PlayerRollAction {
    type: typeof PLAYER_ROLL
}


export interface MonsterRollAction {
    type: typeof MONSTER_ROLL,
    payload: { result: number }
}

export interface AllRollsDoneAction {
    type: typeof ALL_ROLLS_DONE,
    payload: { result: number }
}

export interface ResetTurnAction {
    type: typeof RESET_TURN
}

export interface ComputeTurnAction {
    type: typeof COMPUTE_TURN
}

export interface ResetGameAction {
    type: typeof RESET_GAME
}

export type GameReducerAction =
    PlayerRollAction |
    MonsterRollAction |
    AllRollsDoneAction |
    ResetTurnAction |
    ComputeTurnAction |
    ResetGameAction