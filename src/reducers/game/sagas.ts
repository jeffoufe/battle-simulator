import { ALL_ROLLS_DONE, END_TURN, RESET_TURN, COMPUTE_TURN } from './constants';
import { takeEvery, put, select, delay } from 'redux-saga/effects';

interface EndTurnAction {
    payload: {
        result: number
    }
}

function* endTurn(action: EndTurnAction) {
    const { result } = action.payload;
    yield put({
        type: ALL_ROLLS_DONE,
        payload: { result }
    })
    const playerResult = select((state: any) => state.player.result);
    const monsterResult = select((state: any) => state.monster.result);
    if (playerResult === monsterResult) {
        yield delay(1000);
        yield put({
            type: RESET_TURN
        });
    } else {
        const order = playerResult < monsterResult;
        yield put({
            type: COMPUTE_TURN,
            payload: { order }
        })
        yield delay(1000);
        yield put({
            type: RESET_TURN
        });
    }
}   

export function* watchEndTurn() {
    // @ts-ignore
    yield takeEvery(END_TURN, endTurn);
}