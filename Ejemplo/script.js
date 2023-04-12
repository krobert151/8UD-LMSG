function buscarEnlaces() {
        let enlace = document.querySelector('#primerEnlace') //guarda en enlace el elemento que tiene el id #primerEnlace
        alert(enlace.innerHTML); //muestra el contenido del a
        alert(enlace);//muestra el enlace del a
    let enlaces = document.querySelectorAll('a'); //guarda en un array todos los a
    for(let enlace of enlaces){
        enlace.nextElementSibling.innerHTML = "Pan"; //sustituye el contenido que haya debajo de un a por pan
        let siguienteParrafo = enlace.nextElementSibling; // coge el siguiente elemento de un a
        let primerHijoDelParrafo = siguienteParrafo.children[0]; //coge del elemento anterior el primer hijo
    }
}
//buscarEnlaces();

function crearParrafo(contenido){
    let parrafonuevo = document.createElement('p');
    parrafonuevo.innerHTML = contenido;
    let elBody = document.querySelector('body');
    elBody.append(parrafonuevo);
    
}

//crear un parrafo crearParrafo(prompt('¿Quiere pan?'));

function pedirNombres() {
    let nombres = [];
    let verda = false;
    do {
        let nombre = prompt("Seleccione el nombre")
        if(isNaN(nombre)){
            nombres.push(nombre);
        }else{
            verda=true;
        }
    } while (!verda);
    return nombres;
}


function camelize(str){
    let palabras = str.split('-');
    for (let i = 0; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra.charAt(0).toUpperCase();
        palabra = primeraLetra.concat(palabra.substring(1));
        palabras [i] = palabra;
    }
    return palabras.join('');
}

function sortear(arr){
    let numAleatorio = Math.floor(Math.random() * arr.length)
    return arr[numAleatorio];
}

function principal(){

    let palabras = pedirNombres();
    for (let i = 0; i < palabras.length; i++) {
       palabras[i]= camelize(palabras[i]);  
    }
    alert('La palabra aleatoria es '+sortear(palabras));
}

//principal();

/*
 *Crea una función que reciba una cadena de texto y retorne la cadena invertida. Por ejemplo, si se recibe la cadena "Hola mundo", 
 se debe retornar la cadena "odnum aloH".
*/

function reverse(str){
    alert(str.split('').reverse().join(''));
}

/*
Escribe una función que reciba una cadena de texto y un número entero. La función debe retornar una nueva cadena de texto con 
los primeros n caracteres de la cadena original. Si el número n es mayor que la longitud de la cadena original, se debe retornar 
la cadena completa. Por ejemplo, si se recibe la cadena "Hola mundo" y el número 3, se debe retornar la cadena "Hol".
*/

function cortador(str,num) {
    let letras = str.split('');
    let palabra = ('');
    if(num<str.length){

        for (let i = 0; i < num; i++) {
            palabra = palabra.concat(letras[i]);
        }

    }

    alert(palabra);
}

//cortador(prompt('str'),prompt('num'));


/*
Crea una función que reciba una cadena de texto y retorne la cadena con todas las palabras en orden inverso. Por ejemplo, si se 
recibe la cadena "Hola mundo cruel", se debe retornar la cadena "cruel mundo Hola".
*/

function reverseAll(str){

    let palabras = str.split(' ');

    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].split('').reverse().join('');

    }

    alert(palabras.reverse().join(' '));

}

//reverseAll(prompt('joe'))


/*
Crea una función que reciba dos cadenas de texto y retorne la concatenación de ambas cadenas con el primer y último carácter 
intercambiados. Por ejemplo, si se recibe la cadena "Hola" y la cadena "mundo", se debe retornar la cadena "dolHmuno". 
 * 
 */

function mix(str1,str2) {
    let let1 = str1.charAt(0);
    let let2 = str2.charAt(0);

    let arr1 = str1.split('');
    let arr2 = str2.split('');

    arr1.shift();
    arr2.shift();

    arr1.unshift(let2);
    arr2.unshift(let1);

    alert(arr1.join('')+arr2.join(''));

}

mix(prompt('illo'),prompt('ILLO'));

//EJERCICIO 1
//Escribe una función llamada "reverso" que tome una cadena de texto y devuelva la cadena en orden inverso.

//EJERCICIO 2
//Escribe una función llamada "cuentaPalabras" que tome una cadena de texto y devuelva el número de palabras que hay en ella. Se considerará que las palabras están separadas por un espacio en blanco.

//EJERCICIO 3
//Escribe una función llamada "mayusculas" que tome una cadena de texto y devuelva la misma cadena con todas las letras en mayúscula.

//EJERCICIO 4
//Escribe una función llamada "contarLetras" que tome una cadena de texto y un carácter, y devuelva el número de veces que aparece ese carácter en la cadena.

//EJERCICIO 5
//Escribe una función llamada "eliminarRepetidos" que tome un array de números y elimine los elementos que se repiten en el array.

//EJERCICIO 6
//Escribe una función llamada "ordenarNumeros" que tome un array de números y lo ordene de menor a mayor.

//EJERCICIO 7
//Escribe una función llamada "palindromo" que tome una cadena de texto y devuelva true si la cadena es un palíndromo (es decir, si se lee igual de izquierda a derecha que de derecha a izquierda) y false en caso contrario.


