//variables
const resultado = document.querySelector("#resultado");
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;
const year = document.querySelector("#year");
const marca = document.querySelector("#marca");
const puertas = document.querySelector("#puertas")
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
let encontrados = autos;

//Eventos
document.addEventListener("DOMContentLoaded", () => {
    // mostrarAutos(autos);
    llenarSelect();
});
//Funciones
function mostrarAutos(objeto) {
    objeto.forEach(elemento => {
        const { marca, modelo, puertas, year, precio, color, transmision } = elemento;//desestructuramos
        //creamos un parrafo
        const autoHTML = document.createElement('p');
        //agregamos auto+ el nombre de la marca
        autoHTML.textContent = `Auto: ${marca} - Modelo: ${modelo} - Puertas: ${puertas} - Año: ${year} - Precio: ${precio} - color: ${color} - color: ${transmision}`;
        //agregamos autoHTML a resultados
        resultado.appendChild(autoHTML);
    });
}

function llenarSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

//buscamos por marca
marca.addEventListener('change', (e) => {
    filter();
});

//buscamos por año
year.addEventListener('change', (e) => {
    filter();
});

//buscamos por año
puertas.addEventListener('change', (e) => {
    filter();
});
//buscamos por 
transmision.addEventListener('change', (e) => {
    filter();
});
// color
color.addEventListener('change', (e) => {
    filter();
});
// minimo
minimo.addEventListener('change', (e) => {
    filter();
});
// maximo
maximo.addEventListener('change', (e) => {
    filter();
});
function filter() {
    let copia = autos;

    if (marca.value != "") {
        copia = copia.filter(elemento => elemento.marca == marca.value);
    }
    if (year.value != "") {
        copia = copia.filter(elemento => elemento.year == year.value);
    }
    if (puertas.value != "") {
        copia = copia.filter(elemento => elemento.puertas == puertas.value);
    }
    if (transmision.value != "") {
        copia = copia.filter(elemento => elemento.transmision == transmision.value);
    }
    if (color.value != "") {
        copia = copia.filter(elemento => elemento.color == color.value);
    }
    if (minimo.value != "") {
        copia = copia.filter(elemento => elemento.precio <= minimo.value);
    }
    if (maximo.value != "") {
        copia = copia.filter(elemento => elemento.precio >= maximo.value);
    }
    //limiamos ultimo resultado
    resultado.innerHTML = "";
    mostrarAutos(copia);
    if (copia.length == 0) {
        console.log("array vacio");
        const mensaje = document.createElement('p');
        mensaje.textContent = "No existe un auto con esas caracteristicas.";
        resultado.appendChild(mensaje);
        mensaje.style = "background-color: red; color: white";
    }
    //cuando todos esten en SELECT limpiamos el buscador
    if (marca.value === "" && year.value === "" && puertas.value === "" && transmision.value === "" && color.value === "" && minimo.value === "" && maximo.value === "") {
        resultado.innerHTML = "";
        console.log("NADA");
    }
}