function timeConverter(number){
    const horas = number / 60;
    const mins = number % 60;
    console.log('horas'+Math.floor(horas));
    console.log('minutos'+mins);
}

timeConverter(200);