//Explicacion

//Objeto: es algo similar a una matriz/array, solo que en vez de almacenar informacion, almacenamos un par clave-valor. Es decir, almacenamos informacion
// importante, con su respectivo valor. Por ejemplo, para una persona, podriamos crear un objeto cuyos pares clave-valor sean nombre-"nombre", apellido-"apellido", edad-"edad"
// y asi. Lo que no se puede hacer es repetir las claves, cada es unica.Pero si pueden existir claves de un mismo valor. Ejemplo si tuviesemos
// dos claves "numero favorito" y "dia en el que nacimos" y ambos son 7, no habria problema.

//Propiedades: se le llama al par clave valor. Estos pueden ser eliminados utilizando el comando delete.

//Metodos: los metodos son funciones en el lugar donde iria un valor de cada clave, dentro del objeto. Sin saberlo las hemos ido usando,
// como por ejemplo la .length o la .push . Que diferencia hay entre una funcion y un metodo? Que un metodo es intrinseco del objeto, y la funcion
//esta afuera del mismo.


//Bucle for..in: Es la manera de usar el bucle for pero para objetos. Antes en array usabamos el for con indice de variable "i" que aumentaba de a uno, porque
// pero aca no estan ordenados en posiciones, asi que si le decimos la posicion 1,2,3 no sabe que par clave valor es. Por eso haciendo for...in vamos de uno en uno pero
// para objetos.

//Diferencia entre notacion de puntos y notacion de corchete: La notacion de punto utiliza un metodo dentro del objeto, una funcion intrinseca al obketo
// que fue definida adentro de el. La notacion con corchete se usa para definir un objeto, o una funcion ( que en realidad es un objeto al final de cuentas, todo es un objeto).

//MAL: LA NOTACION de corchete se usa para acceder al valor, mientras que la notacion de punto se usa para referenciar el valor.