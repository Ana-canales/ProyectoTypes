//let start = "9".length * "1".length;
//let limit = "10".length * "10".length;
//for(let i = start;i <= limit;i++){
// console.log(i);
// }
//let max = ".......".length;
// for(let i = [].length;i <= (max * max);i++){
//   console.log(i);
//}
var listaOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 50, 60, 70, 80, 90, 100];
//filter
var nuevaLista = listaOriginal.map(function sumaUno(elementoActual) {
    return elementoActual + 5;
});
console.log(nuevaLista);
