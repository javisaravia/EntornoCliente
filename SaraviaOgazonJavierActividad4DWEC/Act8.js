//actividad 8
//comntamos las vocales de un texto

let texto = parseFloat(prompt("Introduce una cadena de texto: "));

function contarVocales(texto) {
  let contador = 0;
  const vocales = 'aeiouAEIOU';
  for (let i = 0; i < texto.length; i++) {
    if (vocales.indexOf(texto[i]) !== -1) {
      contador++;
    }
  }
  return contador;
}

contarVocales(texto);