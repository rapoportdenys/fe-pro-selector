const object = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};

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


console.log(selector(object, ['test', 'myField', 'value string'])); // => 'result'
console.log(selector(object, ['test', 'notExistField', 'value string'])); // => ''
