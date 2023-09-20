function estilo(){
    let bodyC = document.querySelector("#body");
    bodyC.classList.replace("bg-primary-subtle", "bg-info")
    let h1style = document.querySelector("#h1")
    h1style.classList.replace("text-secondary", "text-warning")
    let h2style = document.querySelector("#h2")
    h2style.classList.replace("text-primary-emphasis", "text-success")
}

function crear(){

    let lista = [
        [1234, 41242, 232321],
        ["Pepe", "Paco", "Sasss"],
        ["Sandia", "Pera", "Melon"],
        [1234, 41242, 232321],
    ]

    // Cojo el container
    let container = document.querySelector("#primerC");
    // Creo las filas
    let div = document.createElement("div")
    div.classList = "row bg-info-subtle my-5";

    // crear ul y li
    
    

    lista.forEach(cuatro => {
        let divn = document.createElement("div")
        divn.classList.add("col")
        // le añadimos el ul
        let ul = document.createElement("ul")
        cuatro.forEach(element => {
            let li = document.createElement("li")
            li.innerText = element
            ul.appendChild(li)
        });
        // Ya tenemos la lista completa, la pasamos al div
        divn.appendChild(ul)
        // Añadimos el divCol a la fila
        div.appendChild(divn)
    });
    // Añadimos la nueva fila al container
    container.appendChild(div);

    // [EXTRA!] 
    // Por último cambiamos la función del botón para restaurar
    let boton = document.querySelector("#listas");
    boton.innerText = "Restaurar";
    boton.addEventListener("click", (_) => location.reload());

}