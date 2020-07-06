const turbinaEspecial = require('../src/TurbinaEspecial');

describe('Turbina Especial Test', () => {

    test('Turbina especial test case', () => {
        const res = new turbinaEspecial(4000,true);
        expect(res.potencia).toBe(600000); 
    });
  });