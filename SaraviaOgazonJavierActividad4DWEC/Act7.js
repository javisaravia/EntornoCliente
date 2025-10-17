//actividad 7
//comprobamos si es numero amstrong

let num = parseInt(prompt("Introduce un número de tres dígitos"));

//separamos los dígitos
let centenas = Math.floor(numero / 100);
let decenas = Math.floor((numero % 100) / 10);
let unidades = numero % 10;

let sumaCubos = Math.pow(centenas, 3) + Math.pow(decenas, 3) + Math.pow(unidades, 3);

function numeroAmstrong(num){
//verificamos si es un número de Armstrong
if (sumaCubos === numero) {
  alert("El número " + numero + " es un número de Armstrong.");
} else {
  alert("El número " + numero + " no es un número de Armstrong.");
}

}
numeroAmstrong(num);