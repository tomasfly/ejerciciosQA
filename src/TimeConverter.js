function TimeConvert(number){
    if(number < 1){
        return null
    }
    const horas = number / 60;
    const mins = number % 60;
    return `${Math.floor(horas)} horas ${mins} minutos`
}

module.exports = TimeConvert;
