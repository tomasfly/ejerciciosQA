const Usina = require('./Usina');
const Turbina = require('./Turbina');
const TurbinaEspecial = require('./TurbinaEspecial');
const turbina1 = new Turbina(50000,true);
const turbina2 = new Turbina(45000,true);
const turbina3 = new Turbina(57000,true);
const turbinaEspecial = new TurbinaEspecial(60000,true)
let U = new Usina([turbina1,turbina2,turbina3,turbinaEspecial]);