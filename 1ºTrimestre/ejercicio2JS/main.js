listas = [
    ["Juan Antonio", "Pedro Luis", "Antonio María", "José Luis"], // alumnos
    ["Enrique", "Manolo", "Sonia", "Alejandra"], // profesores
    [
      "Desarrollo web",
      "Administrador de sistemas",
      "Técnico de Microinformática",
    ], // cursos
    ["Susana", "Iván", "Gloria"], // personal
  ];
  window.addEventListener("load", () => {
    let cols = document.querySelectorAll(".col");
    for (let i = 0; i < cols.length; i++) {
      cols[i].addEventListener("click", () => {
        cargaLista(listas[i]);
      });
    }
  });
  
  function cargaLista(lista) {
    console.log(lista);
    if (document.querySelector("ul")) {
      console.log("Hay ul");
      var ul = document.querySelector("ul");
      ul.classList="list-group w-75 m-auto";
      ul.innerHTML = "";
    } else {
      console.log("No hay ul");
      // Creamos el ul y los li
  
      var ul = document.createElement("ul");
      ul.classList="list-group w-75 m-auto";
    }
    lista.forEach((element) => {
      let li = document.createElement("li");
      li.innerHTML = element;
      li.className = "list-group-item";
      ul.appendChild(li);
    });
    // Coge el col-8 y le agrega el ul
    document.querySelector(".col-8").appendChild(ul);
  }