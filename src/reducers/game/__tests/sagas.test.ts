import { watchEndTurn, endTurn, stateSelector } from '../sagas';
import { takeEvery, put, select, delay } from 'redux-saga/effects';
import { END_TURN } from '../constants';
import { allRollsDone, computeTurn, resetTurn } from '../actions';


describe('Game Reducer Sagas', () => {
    it('watchEndTurn', () => {
        const gen = watchEndTurn();
        // @ts-ignore
        expect(gen.next().value).toEqual(takeEvery(END_TURN, endTurn));
    })

    it('endTurn', () => {
        const gen = endTurn({ 
            payload: {
                result: 5 
            }
        });
        expect(gen.next().value).toEqual(put(allRollsDone(5)))
        expect(gen.next().value).toEqual(select(stateSelector))
        const fakeState = {
            player: { result: 5 },
            monster: { result: 4 }
        }
        expect(gen.next(fakeState).value).toEqual(put(computeTurn()))
        expect(gen.next(fakeState).value).toEqual(delay(1000))
        expect(gen.next(fakeState).value).toEqual(put(resetTurn()))
    })

    it('endTurn - draw', () => {
        const gen = endTurn({ 
            payload: {
                result: 3 
            }
        });
        expect(gen.next().value).toEqual(put(allRollsDone(3)))
        expect(gen.next().value).toEqual(select(stateSelector))
        const fakeState = {
            player: { result: 3 },
            monster: { result: 3 }
        }
        expect(gen.next(fakeState).value).toEqual(delay(1000))
        expect(gen.next(fakeState).value).toEqual(put(resetTurn()))
    })
})