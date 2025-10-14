//Activdad 2: Escribe un programa que imprima los números del 1 al 100. 
//Para múltiplos de 4, imprime "FrontEnd"
//Múltiplos de 7, imprime BackEnd
//Para ambos, imprime FullStack
for (i = 1; i <= 100; i++)
{
    if (i % 4 === 0 && i % 7 === 0) 
    {
        console.log("Full Stack");
    }

    else if (i % 4 === 0) {
        console.log("FrontEnd");
    }

    else if (i % 7 === 0) {
        console.log("BackEnd");
    }

    else {
        console.log(i);
    }
}

