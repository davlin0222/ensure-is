const ensure = require('.');

describe('ensure', () => {
    it('is callable', () => {
        ensure();
    });
    describe('.is.string', () => {
        it('should return valid strings', () => {
            expect(ensure('hello').is.string()).toEqual('hello');
        });
    });
});
