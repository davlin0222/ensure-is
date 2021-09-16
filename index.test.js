const ensure = require('.');

const { it_throws_if_not_string } = require('./utils/jest/it_throws_if');

describe('ensure', () => {
    it('is callable', () => {
        ensure();
    });
    describe('.is.string', () => {
        it('should return valid strings', () => {
            expect(ensure('hello').is.string()).toEqual('hello');
        });

        it('should throw', () => {
            expect(() => {
                ensure(10).is.string();
            }).toThrow();
        });
    });
});