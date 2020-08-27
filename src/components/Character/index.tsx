import React, { useRef, useEffect, MutableRefObject } from 'react';
import CharacterHealth from '../CharacterHealth';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css';
import { useDispatch, useSelector } from 'react-redux';
import { MONSTER_ROLL, END_TURN } from '../../reducers/game/constants';

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
    order: number,
}

interface DiceRef extends MutableRefObject<null> {
    rollAll: () => void
}


const Character = ({ image, order }: CharacterProps) => {
    const dispatch = useDispatch();
    const { health, isRolling } = useSelector((state: any) => state[order ? 'monster' : 'player'])
    let diceRef = useRef<DiceRef>(null);

    useEffect(() => {
        if (isRolling) {
            diceRef.rollAll();
        }
    }, [isRolling])

    const onRollDone = (result: number) => {
        if (!order) {
            dispatch({
                type: MONSTER_ROLL,
                payload: { result }
            })
        } else {
            dispatch({
                type: END_TURN,
                payload: { result }
            })
        }
    }

    return (
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
                        ref={(dice: DiceRef) => diceRef = dice}
                        rollDone={onRollDone}
                    />
                </CharacterDice> 
            </CharacterInfoDice>
        </CharacterContainer>
    )
}

Character.displayName = 'Character';
export default Character;