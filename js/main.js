/* Variables */
let nombre;
let apellido;

/* Alerta datos de Usuario*/

/* nombre = prompt("Introduci tu nombre");
apellido = prompt("Introduci tu apellido");

let titulo = document.getElementById("bienvenido")
titulo.innerText = `Bienvenido ${nombre} ${apellido}`  */
/* Datos sobre provincias */

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

/* Array de las provincias y sus datos CENSO 2010 */

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

/* for (const provincia of provincias) {
    console.log("id:"+provincia.id+" Nombre "+provincia.provincia+", poblacion "+provincia.poblacion+", territorio "+provincia.territorio)
    
} */

const poblaciontotal = provincias.map(provincias => provincias.poblacion).reduce((prev, curr) => prev + curr, 0);

console.log("Poblacion total: " + poblaciontotal);

const territoriototal = provincias.map(provincias => provincias.territorio).reduce((prev, curr) => prev + curr, 0);

console.log("Territorio total: " + territoriototal + "Km²");

let headers = ["Provincias", "Poblacion", "Territorio"]

let botonListado = document.querySelector("#verListado");
let tablaListado = document.querySelector("#tablalistado");



botonListado.addEventListener("click", () => {
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");

    headers.forEach(headerText => {
        let header = document.createElement("th");
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    })
    tablalistado.appendChild(headerRow);   
    
    provincias.forEach(emp=> {
        let row = document.createElement("tr")

        Object.values(emp).forEach(text =>{
            let cell = document.createElement("th")
            let textNode = document.createTextNode(text)
            cell.appendChild(textNode)
            row.appendChild(cell)
        })
        tablalistado.appendChild(row);
    })

    tablalistado.appendChild(table);

})


