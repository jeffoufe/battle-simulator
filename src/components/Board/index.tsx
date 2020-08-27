import React from 'react';
import { BoardContainer } from './components';
import { Title, Character, Actions } from '..';
import WARRIOR_IMAGE from '../../assets/warrior.png';
import MONSTER_IMAGE from '../../assets/monster.png';

const Board = () => (
  <>
    <Title>Battle Simulator</Title>
    <BoardContainer>
      <Character
        image={WARRIOR_IMAGE}
        order={0}
      />
      <Actions />
      <Character
        image={MONSTER_IMAGE}
        order={1}
      />
    </BoardContainer>
  </>
)

export default Board;
