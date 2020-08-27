import {
  ATTACK
} from './constants';

const CHARACTER_INITIAL_STATE = {
  health: 100,
  isRolling: false
};

const INITIAL_STATE = {
  player: CHARACTER_INITIAL_STATE,
  monster: CHARACTER_INITIAL_STATE
}

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    /* case ATTACK:
      const character = action.payload.order ? 'monster' : 'player';
      return {
        ...state,
        [character]: {
          ...state[character],
          health: state[character].health - action.payload.damage
        }
      } */
    default:
      return state;
  }
};