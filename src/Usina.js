class Usina {

    constructor(turbinas) {
        if (turbinas.length < 1) {
            throw new Error(`No hay suficientes turbinas para esta Usina`);
        }
        let potenciaTotal = 0;
        this.turbinas = turbinas;
        this.turbinas.forEach(element => {
            potenciaTotal = potenciaTotal + element.potencia;
        });
        this.potenciaTotal = potenciaTotal;
    }
    get potencia() {
        if (this.potenciaTotal < 1){
            throw new Error(`No hay suficiente potencia para esta Usina`);
        }
        return this.potenciaTotal;
    }
}

module.exports = Usina;