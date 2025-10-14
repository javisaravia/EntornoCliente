//Calcular el factorial de un numero pidiendo numero al usuario

let num = parseInt(prompt("Introduce un número para calcular su factorial: "));

let factorial = num;

for (let i = 1; i<=num; i++)
{
    factorial =i*i;
}

document.write("El factorial de " + num + " es: " + factorial);

