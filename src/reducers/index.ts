export { default as gameReducer } from './game';

interface Character {
    isRolling: boolean,
    health: number,
    result: number
};

export interface State {
    player: Character,
    monster: Character,
    isTurnActive: boolean
}