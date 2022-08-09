
/* Variables */
let nombre;
let apellido;

/* Tomar datos de usuario */

/* Datos sobre provincias con objetos*/

function provincia(nombre, poblacion, territorio) {
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.territorio = territorio;
    this.datos = function () { console.log("La provincia de " + this.nombre + " tiene una poblacion de " + this.poblacion + " habitantes y una superficie de " + this.territorio + " Km²") };
}
const buenos_aires = new provincia("Buenos Aires", "15625084", "307571")

const entre_rios = new provincia("Entre rios", "1405890", "78781")

const cordoba = new provincia("Cordoba", " 3308876", "165321")

buenos_aires.datos();
entre_rios.datos();
cordoba.datos();

let resultado = parseInt(buenos_aires.poblacion) + parseInt(cordoba.poblacion);

console.log("Entre Buenos Aires y Cordoba hay " + resultado + " habitantes")




/* Alerta con bucle */

for (let i = 0; i < 3; i++) {
    console.log("Este es un mensaje que se repetira 3 veces");

}

/* Array de las provincias y sus datos CENSO 2010 con Array*/

const provincias = [
    { provincia: "Buenos Aires", poblacion: 15625084, territorio: 307571 },
    { provincia: "Catamarca", poblacion: 102602, territorio: 102602 },
    { provincia: "Cordoba", poblacion: 165321, territorio: 165321 },
    { provincia: "Corrientes", poblacion: 930991, territorio: 88199 },
    { provincia: "Chaco", poblacion: 984446, territorio: 99633 },
    { provincia: "Chubut", poblacion: 413237, territorio: 224686 },
    { provincia: "Entre Rios", poblacion: 1158147, territorio: 78781 },
    { provincia: "Formosa", poblacion: 486559, territorio: 72066 },
    { provincia: "Jujuy", poblacion: 611888, territorio: 53219 },
    { provincia: "La Pampa", poblacion: 299294, territorio: 143440 },
    { provincia: "La Rioja", poblacion: 289983, territorio: 89680 },
    { provincia: "Mendoza", poblacion: 1579651, territorio: 148827 },
    { provincia: "Misiones", poblacion: 965522, territorio: 29801 },
    { provincia: "Neuquen", poblacion: 474155, territorio: 94078 },
    { provincia: "Rio Negro", poblacion: 552822, territorio: 203013 },
    { provincia: "Salta", poblacion: 1079051, territorio: 155488 },
    { provincia: "San Juan", poblacion: 620023, territorio: 89651 },
    { provincia: "San Luis", poblacion: 367933, territorio: 76748 },
    { provincia: "Santa Cruz", poblacion: 196958, territorio: 243943 },
    { provincia: "Santa Fe", poblacion: 3000701, territorio: 133007 },
    { provincia: "Santiago del Estero", poblacion: 804457, territorio: 136351 },
    { provincia: "Tierra del Fuego", poblacion: 101079, territorio: 21571 },
    { provincia: "Tucuman", poblacion: 1338523, territorio: 22524 }
];


/* Sumando desde el array */

const poblaciontotal = provincias.map(provincias => provincias.poblacion).reduce((prev, curr) => prev + curr, 0);

console.log("Poblacion total: " + poblaciontotal);

const territoriototal = provincias.map(provincias => provincias.territorio).reduce((prev, curr) => prev + curr, 0);

console.log("Territorio total: " + territoriototal + "Km²");

/* Creando un listado a traves de un boton */

let headers = ["Provincias", "Poblacion", "Territorio"]

let botonListado = document.querySelector("#verListado");
let tablaListado = document.querySelector("#tablalistado");
let condicion = false
botonListado.addEventListener("click", () => {
    if (condicion == true) {
        condicion = false
        document.getElementById("verListado").innerHTML = "Ver Listado";
        tablalistado.innerHTML = "";
    } else {
        let table = document.createElement("table");
        table.setAttribute("id", "table")
        let headerRow = document.createElement("tr");
        headerRow.setAttribute("id", "headerRow")
        headers.forEach(tituloTexto => {
            let header = document.createElement("th");
            header.setAttribute("id", "header")
            let textNode = document.createTextNode(tituloTexto);
            header.appendChild(textNode);
            headerRow.appendChild(header);
        })
        tablalistado.appendChild(headerRow);
        provincias.forEach(rowsTexto => {
            let row = document.createElement("tr")
            row.setAttribute("id", "row")
            Object.values(rowsTexto).forEach(text => {
                let cell = document.createElement("th")
                cell.setAttribute("id", "celda")
                let textNode = document.createTextNode(text)
                cell.appendChild(textNode)
                row.appendChild(cell)
            })
            tablalistado.appendChild(row);
        })
        tablalistado.appendChild(table);
        document.getElementById("verListado").innerHTML = "Cerrar Listado";
        condicion = true;
    }
})

/* Datos Login */

datos__boton.addEventListener("click", () => {
    document.getElementById("datos__boton")

    if (datos__nombre.value.length == 0, datos__apellido.value.length == 0, datos__mail.value.length == 0) {
        alert("Los datos fueron ingresados incorrectamente")
    } else {
        let nombre, apellido, email;
        nombre = document.getElementById("datos__nombre").value;
        apellido = document.getElementById("datos__apellido").value;
        email = document.getElementById("datos__mail").value;
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("apellido", apellido);
        localStorage.setItem("mail", email);
        document.getElementById("login").classList.add('invisible');
        console.log(localStorage.getItem("nombre"));
        console.log(localStorage.getItem("apellido"));
        console.log(localStorage.getItem("mail"));
    }
});
/* Ternario ?*/

parseInt(buenos_aires.poblacion) > 1500000 ? console.log("Hay mas de 15 millones de habitantes") : console.log("Hay menos de 15 millones de habitantes");

/* Libreria Graphs de google */

/* let grafico = provincias.map(({provincia, poblacion,})=>{ 
    return [provincia,poblacion];
}); */
/* for (let index = 0; index < provincias.length; index++) {
    const element = provincias[index];
    let personaBuscada = element.map((p) => `${p.poblacion},${p.provincia}`);
grafico = [...grafico, personaBuscada];
} */
let grafico = []
grafico = [...grafico, provincias.map(p => [p.provincia,p.poblacion])];
console.log(grafico)

/* `${p.poblacion},${p.provincia}` */

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);
function drawChart() {


    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Provincias');
    data.addColumn('number', 'Poblacion');
    data.addRows(grafico[0]);

    var options = {
        title: 'Poblacion de las provincias argentinas',
        backgroundColor: 'gray',
    };
    var chart = new google.visualization.PieChart(document.getElementById('provincias'));
    chart.draw(data, options);
}


