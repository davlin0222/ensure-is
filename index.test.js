const ensure = require('.');

const {
    it_throws_if_not_string,
    it_throws_if_not_array,
} = require('./utils/jest/it_throws_if');

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

    describe('.is.array', () => {
        it('should return ordinary arrays', () => {
            expect(ensure([0, 1, 2]).is.array()).toEqual([0, 1, 2]);
        });

        it('should return empty arrays', () => {
            expect(ensure('').is.array()).toEqual('');
        });

        it('should throw if array constructor', () => {
            expect(() => {
                ensure(new Array()).is.array();
            }).toThrow();
        });

        it_throws_if_not_array(object => ensure(object).is.array());
    });
});
