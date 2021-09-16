module.exports = ensure;

function ensure(object) {
    const is = {
        string,
        array,
    };

    return { is };

    function string() {
        if (typeof object !== 'string') throw new TypeError();
        return object;
    }
    function array() {
        if (typeof object === 'object' && Array.isArray(object)) return object;
        throw new TypeError();
    }
}
