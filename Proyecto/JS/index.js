//Variables
// var var1 = 1;
// const con1 = 1;
// let let1 = 11;
//Tipos de datos
/* bool
int
float
string
char
number
array
object
*/
//Operadores
// asignacion
// aritmeticos
// unitarios(++,--,!)
// condicionales
// relacionales
// logicos (&&,||)
//&&=Y
//||=O
// let array = [1, 2, 3, 4, 6];
// let suma = 0;
//bucles de repeticion
//WHILE
//FOR
// for (let i = 0; i < array.length; i++) {
//   array[3]=2
// }
// for (let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
// console.log(suma);
//  while (array.length > c) {
//    console.log(array[c]);
//    c++;
//  }

// do{
//     console.log(array[c]);
//     c++
// }while(array.length > c);

//FUNCIONES

// function primerF(i,g,j){
//     // for (let i = 0; i < array.length; i++) {
//     //     array[3]=2
//     //   }
//     //   for (let i = 0; i < array.length; i++) {
//     //     console.log(array[i]);
//     //   }
//     console.log(i+g+j);
// }
// primerF("Hola", " ","Mundo");

//OBJETOS

let mouse = {
  color: "negro",
  marca: "Genius",
  modelo: "Genius 1000",
  precio: 1000,
};
mouse.rueda = "grande";
mouse.rueda = "pequeña";
delete mouse.rueda;

const mensaje = () => {
  console.log("PAGINA NORMAL");
};

function mensajeT() {
  console.log("ANUNCIO DE ESTAFA");
}

// window.setInterval(mensaje,2000)
// window.setInterval(mensajeT,3000)

//JSON
let caballero = {
  id: 1,
  name: "AldeBaram",
  age: 50,
  powers: {
    pw1: "choque",
    pw2: "correr",
  },
};

let jsonAjs = JSON.stringify(caballero);

// localStorage.setItem("caballero",jsonAjs)

// console.log(jsonAjs)

let jsAjson = JSON.parse(jsonAjs);

// let cabellero1=JSON.parse(localStorage.getItem("caballero"))
// console.log(jsAjson)

// console.log(cabellero1)
const funcion1 = (e) => {

  console.log(e.target.value);
};
let boton = document.getElementById("main");

boton.addEventListener("click", funcion1);
