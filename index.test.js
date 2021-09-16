const ensure = require('.');

const { it_throws_if_not_string } = require('./utils/jest/it_throws_if');

describe('ensure', () => {
    it('is callable', () => {
        ensure();
    });
    describe('.is.string', () => {
        it('should return ordinary strings', () => {
            expect(ensure('hello').is.string()).toEqual('hello');
        });

        it('should return empty strings', () => {
            expect(ensure('').is.string()).toEqual('');
        });

        it('should throw if string constructor', () => {
            expect(() => {
                ensure(new String('')).is.string();
            }).toThrow();
        });

        it_throws_if_not_string(object => ensure(object).is.string());
    });
});
