const ensure = require('.');

const it_throws_when = require('./utils/jest/it_throws_when');

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

        it_throws_when.called_with.not_strings(object => ensure(object).is.string());
    });

    describe('.is.array', () => {
        it('should return ordinary arrays', () => {
            expect(ensure([0, 1, 2]).is.array()).toEqual([0, 1, 2]);
        });

        it('should return empty arrays', () => {
            expect(ensure([]).is.array()).toEqual([]);
        });

        it('should allow array constructor', () => {
            expect(ensure(new Array(3)).is.array()).toEqual(new Array(3));
        });

        it_throws_when.called_with.not_arrays(object => ensure(object).is.array());
    });
});
