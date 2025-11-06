var persona = {

    nombre: 'Javier',
    edad: 20,
    pais: 'España'
};

persona.edad = 21; //modificamos la edad

persona.profesion = 'Estudiante'; //agregamos una nueva propiedad

delete persona.pais;

console.log(persona);