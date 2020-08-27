import styled from 'styled-components';
import { breakpoints } from '../../constants';

export const ActionsContainer = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
`;

export const ActionsInfo = styled.p`
    font-size: 1em;
    text-transform: uppercase;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: 1.5em;
    }
`

export const GameOver = styled(ActionsInfo)`
    color: red;
`

export const Victory = styled(ActionsInfo)`
    color: green;
`

export const AttackButton = styled.button`
    color: white;
    background-color: red;
    padding: 10px 20px;
    border: 0px;
    margin-bottom: 20px;
    width: 50%;
    margin-left: 25%;
    font-size: 1em;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        font-size: 1.5em;
    }
`

ActionsContainer.displayName = 'ActionsContainer';
ActionsInfo.displayName = 'ActionsInfo';
GameOver.displayName = 'GameOver';
Victory.displayName = 'Victory';
AttackButton.displayName = 'AttackButton';