const selector = (obj, keys) => {
    for (let i = 0; i < keys.length; i++) {
        let prop = keys[i];
        if (obj.hasOwnProperty(prop)) {
            obj = obj[prop];
        } else {
            return ''
        };
    };
    return obj
};

module.exports = selector;
