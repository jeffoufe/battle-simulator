import React from 'react';
import CharacterHealth from '../CharacterHealth';
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'

import { 
    CharacterImage, 
    CharacterContainer, 
    CharacterInfoDice,
    CharacterInfo,
    CharacterDice,
    CharacterName
} from './components';

interface CharacterProps {
    image: string,
    health: number,
    order: number
}

const Character = ({ image, health, order }: CharacterProps) => (
    <CharacterContainer order={order}>
        <CharacterName order={order}>
            {order ? 'Monster' : 'Player'}
        </CharacterName>
        <CharacterInfoDice order={order}>
            <CharacterInfo order={order}>
                <CharacterImage src={image} />
                <CharacterHealth health={health} />
            </CharacterInfo>
            <CharacterDice order={order}>
                <ReactDice
                    numDice={2}
                    faceColor='#FFFFFF'
                    dotColor='#000000'
                    rollTime={1}
                    dieSize={30}
                    outline
                    // rollDone={this.rollDoneCallback}
                    //ref={dice => this.reactDice = dice}
                />
            </CharacterDice> 
        </CharacterInfoDice>
    </CharacterContainer>
)

Character.displayName = 'Character';
export default Character;