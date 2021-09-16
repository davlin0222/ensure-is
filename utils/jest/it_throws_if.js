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

    throw_if_it('with not strings', not_strings, callback);
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

    throw_if_it('with not arrays', not_arrays, callback);
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

    throw_if_it('with not POJOs (plain old javascript object)', not_pojos, callback);
}

function throw_if_it(message, not_objects, callback) {
    describe(message, () => {
        not_objects.forEach(not_object => {
            it('Throws: ' + not_object, () => {
                expect(() => {
                    callback(not_object);
                }).toThrow(TypeError);
            });
        });
    });
}
