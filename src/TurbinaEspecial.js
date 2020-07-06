const Turbina = require("./Turbina");
const COEF = 150;

class TurbinaEspecial extends Turbina{
    constructor(potencia,activa){
        const power = potencia * COEF;
        super(power,activa);
    }    
}
module.exports = TurbinaEspecial;
