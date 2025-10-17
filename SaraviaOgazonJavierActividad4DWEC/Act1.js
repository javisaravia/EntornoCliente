//Actividad 1. Generar piramide de asteriscos

for (let i = 5; i >= 1; i--) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }
    document.write(fila);
}


