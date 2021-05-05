/* 1. Armar grilla de 20 columnas.
2. Al hacer click en un cuadro que cambie de color (elegir alguno)
3. Armar la grilla con tamaños variables, de acuerdo a un input donde diga la cantidad de columnas. */

const container = document.getElementById("container");
const colorCaja = document.getElementById("color-input");
const colorFondo = document.getElementById("color-fondo");
const columnas = document.getElementById("columnas-input");
const filas = document.getElementById("filas-input");
const botonGenerar = document.getElementById("boton-generar");
const botonLapiz = document.getElementById("boton-lapiz");
botonLapiz.classList.add("botonLapiz");
const botonGoma = document.getElementById("boton-goma");
botonGoma.classList.add("botonGoma");
const borde = document.getElementById("borde");
const tamanio = document.getElementById("tamanio");
let bandera = true;


botonGenerar.addEventListener("click", function () {

    container.innerHTML = "";

    container.style.gridTemplateColumns = `repeat(${columnas.value}, 1fr)`; //Genera la cantidad de columnas de la grilla


    for (let i = 0; i < columnas.value; i++) {
        for (let j = 0; j < filas.value; j++) {

            const caja = document.createElement("div"); //Creamos los div
            caja.classList.add("caja"); //Le añado la clase
            caja.style.backgroundColor = colorFondo.value;

            container.appendChild(caja); //Guardamos en el container


            caja.addEventListener("click", function () {
                if (bandera === true) {

                    caja.style.backgroundColor = colorCaja.value;   //Añade el color

                } else {
                    caja.style.backgroundColor = colorFondo.value;
                }

            })

            /*   caja.addEventListener("dblclick", function(){
                  caja.style.backgroundColor = "#FFFFFF";     //Quita el color
              }) */

        }
    }

});

botonLapiz.addEventListener("click", function () {
    bandera = true;
    botonLapiz.classList.add("seleccionado");
    botonGoma.classList.remove("seleccionado");
})
botonGoma.addEventListener("click", function () {
    bandera = false;
    botonGoma.classList.add("seleccionado");
    botonLapiz.classList.remove("seleccionado");

})

colorFondo.addEventListener("change", function () {

})

borde.addEventListener("input", function (evento) {
    const chequeado = evento.target.checked;

    const arrayCajas = document.querySelectorAll(".caja");
    for (let i = 0; i < arrayCajas.length; i++) {
        arrayCajas[i].style.border = chequeado ? "1px solid black" : "none";
    }
})

tamanio.addEventListener("input", function () {
    const arrayCajas = document.querySelectorAll(".caja");
    for (let i = 0; i < arrayCajas.length; i++) {
        arrayCajas[i].style.width = tamanio.value + "px";
        arrayCajas[i].style.height = tamanio.value + "px";
    }
})
