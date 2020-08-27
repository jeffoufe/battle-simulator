import styled from 'styled-components';
import { getHealthColor } from './utils';
import { breakpoints } from '../../constants';

interface CharacterHealthIndicatorProps {
    health: number
}

export const CharacterHealthContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const CharacterHealthIndicatorContainer = styled.div`
    width: 40px;
    height: ${60}px;
    border: 1px solid black;
    position: relative;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        height: 150px;
    }

    @media only screen and (min-width: ${breakpoints.laptop}) {
        height: 200px;
    }
`

export const CharacterHealthIndicator = styled.div`
    width: 40px;
    height: ${(props: CharacterHealthIndicatorProps) => props.health}%;
    background-color: ${(props: CharacterHealthIndicatorProps) => getHealthColor(props.health)};
    position: absolute;
    bottom: 0;
`

export const CharacterHealthPoints = styled.span`
    margin-top: 5px;
    margin-bottom: 0;
    text-align: center;
`