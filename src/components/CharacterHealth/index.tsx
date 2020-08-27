import React from 'react';
import {
    CharacterHealthContainer,
    CharacterHealthIndicatorContainer,
    CharacterHealthIndicator,
    CharacterHealthPoints
} from './components';

interface CharacterHealthProps {
    health: number
}

const CharacterHealth = (props: CharacterHealthProps) => (
    <CharacterHealthContainer>
        <CharacterHealthIndicatorContainer>
            <CharacterHealthIndicator health={props.health} />
        </CharacterHealthIndicatorContainer> 
        <CharacterHealthPoints>{props.health}</CharacterHealthPoints>
    </CharacterHealthContainer>
)

CharacterHealth.displayName = 'CharacterHealth';
export default CharacterHealth;