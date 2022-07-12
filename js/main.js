/* Variables */
let nombre;
let apellido;

/* Alerta datos de Usuario*/

/* nombre = prompt("Introduci tu nombre");
apellido = prompt("Introduci tu apellido");

alert("Bienvenido" + " " + nombre + " " + apellido); */

/* Datos sobre provincias */

function provincia (nombre,poblacion,territorio){
    this.nombre = nombre;
    this.poblacion = poblacion;
    this.territorio = territorio;
    this.datos = function(){ console.log("La provincia de "+this.nombre+" tiene una poblacion de "+this.poblacion+" habitantes y una superficie de "+this.territorio+" Km²")};

}
const buenos_aires = new provincia ("Buenos Aires" , "15625084" , "307571")

const entre_rios = new provincia ("Entre rios" , "1405890" , "78781")

const cordoba = new provincia ("Cordoba"," 3308876","165321")

buenos_aires.datos();
entre_rios.datos();
cordoba.datos();

let resultado = parseInt(buenos_aires.poblacion) + parseInt(cordoba.poblacion);

console.log("Entre Buenos Aires y Cordoba hay "+resultado+" habitantes")




/* Alerta con bucle */

for (let i = 0; i < 3; i++){
    console.log("Este es un mensaje que se repetira 3 veces");

}
