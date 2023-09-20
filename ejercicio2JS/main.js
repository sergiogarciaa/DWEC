window.onload = function() {
    verTodo()
  };

// Asignar al cargar la página las funciones correspondientes a cada elemento del menú

let datos = [
    ["Pepe", "Paco", "Antonio", "Sara", "Antonia"],
    ["Informatica", "Administracion", "Deporte", "Enfermeria", "Electromecanica"],
    ["Javier", "Rosa", "Manolo", "Angela"],
    ["Susana", "Margari", "Tania"],
]

// Funciones
// Versión básica: crear una función para cada elemento del menú
// Versión avanzada: crear una sola función cambiando el parámetro (que será la lista correspoondiente)

function verTodo() {
   // Selecciono el espacio de trabajo
    let contenedor = document.querySelector(".container")
    // Selecciono un div
    let divGrande = document.querySelector("div")
    // Le pongo la clase
    divGrande.classList = "row bg-white my-3"
    // Recorro el array entero
    datos.forEach(lista => {
        // Creo un div para cada parte de la lista, un div para alumnos, otro para cursos, etc
        let divIndividual = document.createElement("div")
        divIndividual.classList = "col";
        
        // Creo la lista  dentro del div
        let ul = document.createElement("ul");
        ul.classList.add("list-group")  
        // Recorro cada elemento del array
        lista.forEach(element => {
            // Creo cada pieza de la lista
            let li = document.createElement("li");
            li.classList = "list-group-item list-group-item-danger"
            // Le doy el elemento
            li.innerText = element;
            // Le pongo a la lista el elemento correspondiente
            ul.appendChild(li)
        });
           // Le paso al div de la lista su lista
           divIndividual.appendChild(ul);
           // Cuando ya ha terminado le paso al div container cada div
           divGrande.appendChild(divIndividual)

        
    });
}

// Ponerlos todos en oculto y cuando pulse boton mostrarse
