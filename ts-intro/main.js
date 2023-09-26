"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modelos_1 = require("./modelos/modelos");
alert('Hola Mundo con watch mode');
var persona1 = {
    nombre: "Sergio",
    apellidos: "Garcia",
    edad: 57
};
window.addEventListener('load', function () {
    var alumno = new modelos_1.Alumno(persona1, 'CSI2');
    var h1 = document.createElement('h1');
    h1.innerText = alumno.nombreCompleto();
    alumno.setClase('CS1');
});
