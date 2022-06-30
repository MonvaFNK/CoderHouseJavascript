/* Variables */
let nombre;
let apellido;
let email;
let edad;
let numero1;
let numero2;
let numero3;
let numero4;
/* Alerta datos de Usuario*/

nombre = prompt("Introduci tu nombre");
apellido = prompt("Introduci tu apellido");

alert("Bienvenido" + " " + nombre + " " + apellido);

/* Alerta suma de 2 numeros */

numero1 = parseInt(prompt("Introducir el primer numero que quiera sumar"));
numero2 = parseInt(prompt("Introducir el segundo numero que quiera sumar"));

let resultado = numero1 + numero2;

alert(`El resultado de la suma ${numero1} mas ${numero2} es ${resultado}`);

/* Alerta con bucle */

for (let i = 0; i < 3; i++){
    alert("Este es un mensaje que se repetira 3 veces");

}