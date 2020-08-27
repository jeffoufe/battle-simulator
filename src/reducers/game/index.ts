import { State } from '..';
import { GameReducerAction } from './types';
import {
  PLAYER_ROLL,
  MONSTER_ROLL,
  ALL_ROLLS_DONE,
  RESET_TURN,
  COMPUTE_TURN,
  RESET_GAME
} from './constants';

export const CHARACTER_INITIAL_STATE = {
  health: 100,
  result: 0,
  isRolling: false
};

export const INITIAL_STATE = {
  isTurnActive: false,
  player: CHARACTER_INITIAL_STATE,
  monster: CHARACTER_INITIAL_STATE
}

export default (state: State = INITIAL_STATE, action: GameReducerAction) => {
  switch (action.type) {
    case PLAYER_ROLL:
      return {
        ...state,
        isTurnActive: true,
        player: {
          ...state.player,
          isRolling: true
        }
      }
    case MONSTER_ROLL:
      return {
        ...state,
        monster: {
          ...state.monster,
          isRolling: true
        },
        player: {
          ...state.player,
          isRolling: false,
          result: action.payload.result
        }
      }
    case ALL_ROLLS_DONE:
      return {
        ...state,
        monster: {
          ...state.monster,
          isRolling: false,
          result: action.payload.result
        }
      }
    case COMPUTE_TURN:
      const damage = state.player.result - state.monster.result;
      const character = damage < 0 ? 'player' : 'monster';
      return {
        ...state,
        [character]: {
          ...state[character],
          health: state[character].health - (Math.abs(damage))
        }
      }
    case RESET_TURN:
      return {
        ...state,
        isTurnActive: false,
        player: {
          ...state.player,
          result: 0
        },
        monster: {
          ...state.monster,
          result: 0
        }
      }
    case RESET_GAME:
      return INITIAL_STATE;
    default:
      return state;
  }
};