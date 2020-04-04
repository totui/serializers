
import * as api from '../src/api';
import {Serializer} from '../src/Serializer';

describe('Public API', () => {
    it('Serializer', () => {
        expect(api.Serializer).toBe(Serializer);
    });
});
