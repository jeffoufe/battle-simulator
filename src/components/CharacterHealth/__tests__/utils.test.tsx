import { getHealthColor } from '../utils'

describe('CharacterHealth Utils', () => {
    it('getHealthColor', () => {
        expect(getHealthColor(80)).toEqual('green');
        expect(getHealthColor(50)).toEqual('orange');
        expect(getHealthColor(20)).toEqual('red');
    })
})