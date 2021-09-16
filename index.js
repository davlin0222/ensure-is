module.exports = ensure;

function ensure(object) {
    const is = {
        string,
    };

    return { is };

    function string() {
        if (typeof object !== 'string') throw new TypeError();
        return object;
    }
}
