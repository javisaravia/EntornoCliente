//actividad 6

let adivinado = false;
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
//funcion

function adivinarNum(adivinado)
{
    while(adivinado =  true)
    {
        //pedimos al usuario un numero del 1 al 10
        let num = parseInt(prompt("Introduce un número del 1 al 10"), 10);
        if (num == numeroSecreto)
        {
            alert("Has adivinado el número");
        }
        else{
            alert("Incorrecto");
        }
    }
}
adivinarNum(adivinado);