module.exports = {
    it_throws_if_not_string,
    it_throws_if_not_array,
    it_throws_if_not_pojo,
    throw_if_it,
};

function it_throws_if_not_string(callback) {
    const not_strings = [
        undefined,
        false,
        true,
        0,
        1,
        -1,
        NaN,
        null,
        [],
        [0, 1, 2],
        {},
        { a: 'ab', b: 'ab' },
        () => {},
    ];

    throw_if_it("isn't a string", not_strings, callback);
}

function it_throws_if_not_array(callback) {
    const not_arrays = [
        '',
        'abc',
        undefined,
        false,
        true,
        0,
        1,
        -1,
        NaN,
        null,
        {},
        { a: 'ab', b: 'ab' },
        () => {},
    ];

    throw_if_it("isn't an array", not_arrays, callback);
}

function it_throws_if_not_pojo(callback) {
    const not_pojos = [
        undefined,
        '',
        'abc',
        false,
        true,
        0,
        1,
        -1,
        NaN,
        null,
        [],
        [0, 1, 2],
        () => {},
    ];

    throw_if_it("isn't a POJO (plain old javascript object)", not_pojos, callback);
}

function throw_if_it(message, not_things, callback) {
    describe(message, () => {
        not_things.forEach(object => {
            it('Throws: ' + object, () => {
                expect(() => {
                    callback(object);
                }).toThrow(SyntaxError);
            });
        });
    });
}
