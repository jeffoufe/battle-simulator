import React from 'react';
import WARRIOR_IMAGE from './assets/warrior.png';
import MONSTER_IMAGE from './assets/monster.png';
import { Provider } from 'react-redux';
import store from './store';

import {
  Title,
  Character,
  Actions,
  Board
} from './components';

const App = () => (
  <Provider store={store}>
    <Title>Battle Simulator</Title>
    <Board>
      <Character
        image={WARRIOR_IMAGE}
        health={50}
        order={0}
      />
      <Actions />
      <Character
        image={MONSTER_IMAGE}
        health={50}
        order={1}
      />
    </Board>
  </Provider>
);

export default App;
