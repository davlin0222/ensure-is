const it_throws_when = {
    called_with: {
        not_strings,
        not_arrays,
    },
};

module.exports = it_throws_when;

function not_strings(callback) {
    const list_of_not_strings = [
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

    throw_if_called('with not strings', list_of_not_strings, callback);
}

function not_arrays(callback) {
    const list_of_not_arrays = [
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

    throw_if_called('with not arrays', list_of_not_arrays, callback);
}

function throw_if_called(message, not_objects, callback) {
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
