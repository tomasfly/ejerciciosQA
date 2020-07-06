const timeConverter = require('../src/TimeConverter');

describe('Turbina Especial Test', () => {

    test('Turbina especial test case', () => {
        const res = timeConverter(200);
        expect(res).toBe('3 horas 20 minutos')
    });

    test('Turbina especial test case false case', () => {
        const res = timeConverter(0);
        expect(res).toBe(null);
    });
  });