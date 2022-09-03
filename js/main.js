
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

    if (datos__nombre.value.length == 0 || datos__apellido.value.length == 0 || datos__mail.value.length == 0) {
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
        title: `Poblacion de las provincias argentinas, el total es ${poblaciontotal} habitantes`,
        backgroundColor: 'beige',
    };
    var chart = new google.visualization.PieChart(document.getElementById('provincias'));
    chart.draw(data, options);
}
/* Fetch para clima de provincias */

const MEND = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$MDZ&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(MEND);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let MENDCLIMA = document.getElementById("MENDCLIMA")
    let MENDTEMP = document.getElementById("MENDTEMP") 

    MENDCLIMA.innerText = weather.description,
    MENDTEMP.innerText = `${temp}°C`
});

const BSAS = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$buenos&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(BSAS);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let BSASCLIMA = document.getElementById("BSASCLIMA")
    let BSASTEMP = document.getElementById("BSASTEMP") 

    BSASCLIMA.innerText = weather.description,
    BSASTEMP.innerText = `${temp}°C`
});

const TUCU = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$tucu&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(TUCU);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let TUCUCLIMA = document.getElementById("TUCUCLIMA")
    let TUCUTEMP = document.getElementById("TUCUTEMP") 

    TUCUCLIMA.innerText = weather.description,
    TUCUTEMP.innerText = `${temp}°C`
});
const JUAN = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$san&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(JUAN);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let JUANCLIMA = document.getElementById("JUANCLIMA")
    let JUANTEMP = document.getElementById("JUANTEMP") 

    JUANCLIMA.innerText = weather.description,
    JUANTEMP.innerText = `${temp}°C`
});

const RIOJ = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$rion&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(RIOJ);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let RIOJCLIMA = document.getElementById("RIOJCLIMA")
    let RIOJTEMP = document.getElementById("RIOJTEMP") 

    RIOJCLIMA.innerText = weather.description,
    RIOJTEMP.innerText = `${temp}°C`
});

const CATA = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$cata&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CATA);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CATACLIMA = document.getElementById("CATACLIMA")
    let CATATEMP = document.getElementById("CATATEMP") 

    CATACLIMA.innerText = weather.description,
    CATATEMP.innerText = `${temp}°C`
});

const CORD = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$cordoba&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CORD);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CORDCLIMA = document.getElementById("CORDCLIMA")
    let CORDTEMP = document.getElementById("CORDTEMP") 

    CORDCLIMA.innerText = weather.description,
    CORDTEMP.innerText = `${temp}°C`
});

const CORR = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$corrientes&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CORR);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CORRCLIMA = document.getElementById("CORRCLIMA")
    let CORRTEMP = document.getElementById("CORRTEMP") 

    CORRCLIMA.innerText = weather.description,
    CORRTEMP.innerText = `${temp}°C`
});

const CHAC = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$resistencia&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CHAC);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CHACCLIMA = document.getElementById("CHACCLIMA")
    let CHACTEMP = document.getElementById("CHACTEMP") 

    CHACCLIMA.innerText = weather.description,
    CHACTEMP.innerText = `${temp}°C`
});

const CHUB = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$rawson&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CHUB);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CHUBCLIMA = document.getElementById("CHUBCLIMA")
    let CHUBTEMP = document.getElementById("CHUBTEMP") 

    CHUBCLIMA.innerText = weather.description,
    CHUBTEMP.innerText = `${temp}°C`
});

const ENTR = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$Parana&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(ENTR);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let ENTRCLIMA = document.getElementById("ENTRCLIMA")
    let ENTRTEMP = document.getElementById("ENTRTEMP") 

    ENTRCLIMA.innerText = weather.description,
    ENTRTEMP.innerText = `${temp}°C`
});

const FORM = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$Formosa&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(FORM);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let FORMCLIMA = document.getElementById("FORMCLIMA")
    let FORMTEMP = document.getElementById("FORMTEMP") 

    FORMCLIMA.innerText = weather.description,
    FORMTEMP.innerText = `${temp}°C`
});

const JUJU = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$jujuy&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(JUJU);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let JUJUCLIMA = document.getElementById("JUJUCLIMA")
    let JUJUTEMP = document.getElementById("JUJUTEMP") 

    JUJUCLIMA.innerText = weather.description,
    JUJUTEMP.innerText = `${temp}°C`
});

const PAMP = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$SantaRosa&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(PAMP);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let PAMPCLIMA = document.getElementById("PAMPCLIMA")
    let PAMPTEMP = document.getElementById("PAMPTEMP") 

    PAMPCLIMA.innerText = weather.description,
    PAMPTEMP.innerText = `${temp}°C`
});

const MISI = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$posadas&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(MISI);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let MISICLIMA = document.getElementById("MISICLIMA")
    let MISITEMP = document.getElementById("MISITEMP") 

    MISICLIMA.innerText = weather.description,
    MISITEMP.innerText = `${temp}°C`
});

const NEUQ =  `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$Neuquen&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(NEUQ);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let NEUQCLIMA = document.getElementById("NEUQCLIMA")
    let NEUQTEMP = document.getElementById("NEUQTEMP") 

    NEUQCLIMA.innerText = weather.description,
    NEUQTEMP.innerText = `${temp}°C`
});

const NEGR =  `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$Viedma&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(NEGR);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let NEGRCLIMA = document.getElementById("NEGRCLIMA")
    let NEGRTEMP = document.getElementById("NEGRTEMP") 

    NEGRCLIMA.innerText = weather.description,
    NEGRTEMP.innerText = `${temp}°C`
});

const SALT =  `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$Salta&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(SALT);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let SALTCLIMA = document.getElementById("SALTCLIMA")
    let SALTTEMP = document.getElementById("SALTTEMP") 

    SALTCLIMA.innerText = weather.description,
    SALTTEMP.innerText = `${temp}°C`
});

const LUIS = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$sanl&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(LUIS);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let LUISCLIMA = document.getElementById("LUISCLIMA")
    let LUISTEMP = document.getElementById("LUISTEMP") 

    LUISCLIMA.innerText = weather.description,
    LUISTEMP.innerText = `${temp}°C`
});

const FE = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$SantaFe&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(FE);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let FECLIMA = document.getElementById("FECLIMA")
    let FETEMP = document.getElementById("FETEMP") 

    FECLIMA.innerText = weather.description,
    FETEMP.innerText = `${temp}°C`
});

const ESTE = `https://api.weatherbit.io/v2.0/current?key=864ce7c8abb8454d83bd966bf3489aaf&city=$santiagodelestero&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(ESTE);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let ESTECLIMA = document.getElementById("ESTECLIMA")
    let ESTETEMP = document.getElementById("ESTETEMP") 

    ESTECLIMA.innerText = weather.description,
    ESTETEMP.innerText = `${temp}°C`
});

const FUEG = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$santaushuaia&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(FUEG);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let FUEGCLIMA = document.getElementById("FUEGCLIMA")
    let FUEGTEMP = document.getElementById("FUEGTEMP") 

    FUEGCLIMA.innerText = weather.description,
    FUEGTEMP.innerText = `${temp}°C`
});

const CRUZ = `https://api.weatherbit.io/v2.0/current?key=e1a7c144f0134736baf2b9463d30767a&city=$rio%20gallegos&country=AR&lang=ES`;

addEventListener('load', async()=>{
    const respuesta = await fetch(CRUZ);
    const jsonRta = await respuesta.json()
    const {weather, temp} = jsonRta.data[0]
    
    let CRUZCLIMA = document.getElementById("CRUZCLIMA")
    let CRUZTEMP = document.getElementById("CRUZTEMP") 

    CRUZCLIMA.innerText = weather.description,
    CRUZTEMP.innerText = `${temp}°C`
});
