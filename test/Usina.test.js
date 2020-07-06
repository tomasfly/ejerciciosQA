const usina = require('../src/Usina')
const turbina = require('../src/Turbina')

jest.mock('../src/Turbina',()=> class Turbina{
    constructor(potencia,acticva){
        this.potencia = potencia;
        this.activa = acticva;
    }   

});

describe('Usina Test', () => {

  test('Usina test case', () => {
      const turbina1 = new turbina(1000,true);
      const turbina2 = new turbina(2000,true);
      const turbina3 = new turbina(2000,true);
      const res = new usina([turbina1,turbina2,turbina3])
      expect(res.potenciaTotal).toBe(5000);
  });
});