//Actividad 5
//pedimos un numero al usuario

let num = parseInt(prompt("Introduce un numero para saber si es primo o no"));

function numPrimo(num) {
    if (num <= 1) {
        document.write(num + " no es primo");
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            document.write(num + " no es primo");
            return;
        }
    }

   document.write(num + " es primo");
}
numPrimo(num);
