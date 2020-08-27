import React from 'react';
import { useDispatch } from 'react-redux';
import { ATTACK } from '../../reducers/game/constants';
import {
    ActionsContainer,
    AttackButton,
    ActionsInfo
} from './components';

const Actions = () => {
    const dispatch = useDispatch();

    const onClickAttack = () => dispatch({
        type: ATTACK
    })

    return (
        <ActionsContainer>
            <ActionsInfo>YOU HIT FOR 6!</ActionsInfo>
            <AttackButton onClick={onClickAttack}>Attack!</AttackButton>
        </ActionsContainer>
    );
}

Actions.displayName = 'Actions';
export default Actions;