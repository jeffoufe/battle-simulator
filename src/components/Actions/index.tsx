import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clickAttack, resetGame } from '../../reducers/game/actions';
import {
    ActionsContainer,
    AttackButton,
    ActionsInfo,
    GameOver,
    Victory
} from './components';

const Actions = () => {
    const dispatch = useDispatch();
    const { isTurnActive, player, monster } = useSelector((state: any) => state);
    const playerResult = player.result;
    const monsterResult = monster.result;
    const isGameFinished = player.health <= 0 || monster.health <= 0;
    const damage = player.result - monster.result;

    const onClickAttack = () => dispatch(clickAttack());
    const onResetGame = () => dispatch(resetGame());

    return (
        <ActionsContainer>
            {player.health <= 0 && (
                <GameOver>
                    Game Over
                </GameOver>
            )}
            {monster.health <= 0 && (
                <Victory>
                    You Win
                </Victory>
            )}
            {!!(playerResult && monsterResult) && (
                <ActionsInfo>
                    {!!(damage)
                        ? `You ${damage < 0 ? 'Are Hit' : 'Hit'} For ${Math.abs(damage)}`
                        : 'Draw Turn'
                    }
                </ActionsInfo>
            )}
            {!isTurnActive && (
                <AttackButton onClick={isGameFinished ? onResetGame : onClickAttack}>
                    {isGameFinished ? 'Reset': 'Attack!'}
                </AttackButton>
            )}
        </ActionsContainer>
    );
}

Actions.displayName = 'Actions';
export default Actions;