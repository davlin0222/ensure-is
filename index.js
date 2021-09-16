module.exports = ensure;

function ensure(object) {
    console.log('ensure ~ object', object);

    return {
        is: {
            string: () => {
                return object;
            },
        },
    };
}
