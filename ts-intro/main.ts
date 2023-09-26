import { Alumno, Persona } from "./modelos/modelos";

alert('Hola Mundo con watch mode');
var persona1 : Persona = {
    nombre : "Sergio",
    apellidos : "Garcia",
    edad : 57
}


window.addEventListener('load', () => {
    let alumno: Alumno = new Alumno(persona1, 'CSI2');
    let h1 = document.createElement('h1');
    h1.innerText = alumno.nombreCompleto();
    alumno.setClase('CS1')
}
);