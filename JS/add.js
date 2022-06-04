import { addWord } from "./dictionary.js";
var botonComenzar = document.querySelector("#boton-guardar");
var TextoIngresado = document.querySelector("#texto-ingresado");

botonComenzar.addEventListener("click", function () {
 let char = TextoIngresado.value
 let upper = char.toUpperCase();
 if(upper.length <= 8 && upper.test(/[a-z]/g)){
  addWord(upper);
 } else{
   alert("Maximo 8 caracteres")
 }
});
