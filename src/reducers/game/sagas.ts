import { ATTACK, ATTACK_LOADING, ATTACK_SUCCESS } from './constants';
import { takeEvery, put } from 'redux-saga/effects';

function* attack() {
    yield put({ type: ATTACK_LOADING });
}   

export function* watchAttack() {
    yield takeEvery(ATTACK, attack);
}