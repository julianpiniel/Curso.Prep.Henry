// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  return(nombre[0].toUpperCase()+nombre.slice(1)); //funcion toUpperCase me devuelve el caracter del string en mayuscula. // slice me da el array desde el argumento de entrada.
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  cb();
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return(cb(n1,n2));
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
  let suma=numeros.reduce(function(s,i){    //declaro suma como el bucle reduce, que me devuelve un acumulador con el elemento actual mas el anterior acumulado.
    return (s+i); // entonces se empiezan a sumar el actual 0 + el presente, mas el futuro y asi hasta el ultimo elemento
  });
  cb(suma);
}

function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
 for(i=0;i<array.length;i++){
   cb(array[i]);              // Mi array tiene x valores, cada valor lo meto en el cb, que sera alguna funcion. Pero la idea es correr la funcion
 }                            // callbackeada con cada uno de mis valores del array;
}

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  var nuevoA=array.map(function(ele){     //mi nuevoA va a ser mapear array segun la funcion siguiente, en la cual de entrada tengo un elemento
    return(cb(ele));                      // la funcion es retornar una funcion X ( callbackeada) donde le ingreso un elemento.
  });
  return(nuevoA);                         // devuelvo el nuevoA.
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoA=[];
  for(i=0;i<array.length;i++){
    if(array[i].charAt(0)==="a"){
      nuevoA.push(array[i]);
    }
  }
  return nuevoA;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
