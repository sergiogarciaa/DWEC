function saludo() {
    let h1 = document.getElementById('titulo')
    h1.innerHTML = 'Hola Mundo!';
    let parrafo = document.createElement('p');
    parrafo.style.backgroundColor = 'blue';
    parrafo.innerText = 'Este es un parrafo creado con JavaScript';
    // querySelector obtiene a través de css, el id nuevos.
    let div = document.querySelector("#nuevos");
    // Añade un hijo (en este caso añade a div, parrafo.)
    div.appendChild(parrafo);
}

function colorea() {
    // Coge del id nuevos todos los p que hay
    let colorear = document.querySelector('#nuevos').querySelectorAll('p');
    // Recorre los p que ha guardado (están dentro de colorear) y les asigna el color blanco
    colorear.forEach((color) => {
        color.style.color = 'white';
    })
}