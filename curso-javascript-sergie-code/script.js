// STRINGS

const string1 = 'Cadena de texto';
const string2 = "Cadena de texto"; 

const valor = "texto"
const string3 = `Cadena de ${valor}`
console.log(string3)

const string4 = 'const\'s do it' // \  se utiliza para poder utilizar comillas simples dentro de un string con comillas simples
console.log(string4)

const string5 = "Esto esta arriba \nEsto esta abajo"  // \n se usa para hacer un salto de linea
console.log(string5)

const string6 = "Entre estos dos puntos . \b. hay un espacio" // \b se usa para hacer un backspace (borrar un espacio)
console.log(string6)

const string7 = "Entre estos dos puntos . \t. hay un tabulado" // \t se usa para hacer un tabulado
console.log(string7)
 
const contadorDeCaracteres = 'Murciélago'

console.log(contadorDeCaracteres.length) // Length se utiliza para contar los caracteres que tiene la variable.



//START 4 comienza desde el 4 (en el 5) hasta el (inclusive el 7)
const texto = 'Educación';
//
const resultado = texto.slice(4,7);  //texto.substr esta deprecado, es decir ya no se utiliza.. 
console.log(resultado);
//

const texto1 = 'La educación es muy importante en Argentina';
const resultado2 = texto1.slice(-5,-1);   //Si utilizamos numeros negativos comienza contando desde el final hacia el comienzo del string.
console.log(resultado2);
//
const resultado3 = texto1.replace('Argentina', 'el mundo'); // replace se utiliza para reemplazar un valor dentro de la varible.
console.log(resultado3);
//
const resultado4 = texto1.toUpperCase(); // .toUpperCase se utiliza para pasar el string a mayuscula.
console.log(resultado4)
//
const resultado5 = texto1.toLowerCase(); // .toLowerCase se utiliza para pasar el string a minuscula.
console.log(resultado5);

//Concatenar texto
const texto2 = 'Es muy importante la educación en';
const texto3 = ' Argentina';
const texto4 = ' el mundo'
//
const resultado6 = texto2 + texto3;  //concatenar con operador suma
const resultado7 = texto2 + texto4; //concatenar con operador suma
console.log(resultado6); //suma
console.log(resultado7); //suma
//
const resultado8 = texto2.concat(texto3);  //concatenar con .concat
const resultado9 = texto2.concat(texto4); //concatenar con .concat
console.log(resultado8); //.concat
console.log(resultado9); //.concat

//
const texto5 = '            La educación es muy importante en        '
const resultado10 = texto5.trim().concat(texto4); //.trim se utiliza para borrar los espaciados al principio y final del string. (puede ser .trimStart o .trimEnd)
console.log(resultado10);


//
 
const resultado11 = texto[5]; // imprime el char (caracter)  que se en cuentra en esa posicion comenzando desde la posicion 0.
console.log(resultado11);
//
const resultado12 = texto.charAt(5); //lo mismo que el anterior ejemplo pero utilizando el metodo .charAt.
console.log(resultado12);