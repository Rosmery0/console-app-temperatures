const { Temperature } = require('../node_modules/npm-temperatures-tdd/src/Temperatures');
const readline = require('readline');

const cI = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

cI.question("Introduce la temperatura y a cual otra la quieres convertir, ej: 25 K to C \n", function(answer){
    var myArray = answer.split(' ');
    var num = myArray[0];
    var scale = myArray[1];
    var parseScale = myArray[3];

    const temperature = new Temperature(num, scale);

    try{

        if(parseScale == "C"){
            console.log(temperature.toCelcius().round().toString());
        } else if(parseScale == "F"){
            console.log(temperature.toFahrenheit().round().toString());
        } else if(parseScale == "K"){
            console.log(temperature.toKelvin().round().toString());
        } else {
            throw new Error("You did something wrong!!!");
        }

    }catch(err){
        console.error((err).message);
    }
});