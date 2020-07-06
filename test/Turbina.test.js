const turbina = require('../src/Turbina');

describe('Turbina Test', () => {

    test('Turbina test case', () => {

        const res = new turbina(7000,true);
        expect(res.potencia).toBe(7000);
        expect(res.activa).toBe(true);
  
    });
  });