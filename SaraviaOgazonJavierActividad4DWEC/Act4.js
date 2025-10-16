//Actividad 4
let num1 = parseInt(prompt("Introduce un numero "));
let num2 = parseInt(prompt("Introduce un numero "));

//determinamos el mayor y el menor
let inicio = Math.min(num1, num2);
let fin = Math.max(num1, num2);

//imprimimos los multiplos de 8 entre los dos numeros

document.write("Múltiplos de 8 entre " + inicio + " y " + fin + " : ");

for (let i = inicio;  i <= fin; i++)
{
    if (i % 8 === 0)
    {
        document.write("Múltiplo: " +i);
    }
}
































