const selector = require('../selector');

const object = {
    test: {
        myField: {
            'value string': 'result',
        },
    },
};
describe('selector()', () => {
    it('should returns correct value', () => {
        expect(selector(object, ['test', 'myField', 'value string'])).toStrictEqual('result');
        expect(selector(object, ['test', 'not exist', 'value string'])).toStrictEqual('');
    });
})
