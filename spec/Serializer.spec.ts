
import {Serializer} from '../src/Serializer';

describe('Serializer', () => {
    let serializer: Serializer = new Serializer();

    it('objects', () => {
        expect(serializer.serialize({
            test: 123,
            really: true
        })).toBe('{"test":123,"really":true}');
    });
});
