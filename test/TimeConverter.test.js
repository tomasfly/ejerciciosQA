const timeConverter = require('../src/TimeConverter');

describe('Turbina Especial Test', () => {

    test('Turbina especial test case', () => {
        const res = timeConverter(63);
        expect(res).toBe('1:3')
    });

    test('Turbina especial test case false case', () => {
        const res = timeConverter(0);
        expect(res).toBe(null);
    });
  });