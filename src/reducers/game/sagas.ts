import { END_TURN } from './constants';
import { allRollsDone, computeTurn, resetTurn} from './actions';
import { takeEvery, put, select, delay } from 'redux-saga/effects';
import { State } from '..';

interface EndTurnAction {
    payload: {
        result: number
    }
}

// For the tests
export const stateSelector = (state: State) => state;

export function* endTurn(action: EndTurnAction) {
    const { result } = action.payload;
    yield put(allRollsDone(result))
    const { player, monster } = yield select(stateSelector);
    if (player.result === monster.result) {
        yield delay(1000);
        yield put(resetTurn());
    } else {
        yield put(computeTurn())
        yield delay(1000);
        yield put(resetTurn());
    }
}   

export function* watchEndTurn() {
    // @ts-ignore
    yield takeEvery(END_TURN, endTurn);
}