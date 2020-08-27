import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../reducers';
import {
    CharacterHealthContainer,
    CharacterHealthIndicatorContainer,
    CharacterHealthIndicator,
    CharacterHealthPoints
} from './components';

interface CharacterHealthProps {
    health: number,
    order: number
}

const CharacterHealth = (props: CharacterHealthProps) => {
    const { order } = props;
    const health = props.health < 0 ? 0 : props.health;
    const { player, monster } = useSelector((state: State) => state);
    const playerResult = player.result;
    const monsterResult = monster.result;

    const damage = playerResult && monsterResult ? player.result - monster.result : 0;
    const showDamage = !!damage && ((damage < 0 && order === 0) || (damage > 0 && order === 1))

    return (
        <CharacterHealthContainer>
            <CharacterHealthPoints>{!!showDamage ? `-${Math.abs(damage)}` : ''}</CharacterHealthPoints>
            <CharacterHealthIndicatorContainer>
                <CharacterHealthIndicator health={health} />
            </CharacterHealthIndicatorContainer> 
            <CharacterHealthPoints>{health}</CharacterHealthPoints>
        </CharacterHealthContainer>
    )
}

CharacterHealth.displayName = 'CharacterHealth';
export default CharacterHealth;