/*alert('Soy un chulo')
var edad = 5
let mes = "Enero" /*Este es el wapo molon*/
/*
alert(edad +' de '+mes)
alert('Joe tela de pan')

function miFuncion(){
    if(true){
        var edad= 18
        let telefono = 1234567
    }
    /*alert(var); no va */
/*alert(telefono); va*//*
}

/*TIPOS DE DATOS */

/*Numeros *//*

let iva = 21, precio = 23.95

/*string *//*

let pan = 'Panes'

/*Booleanos*//*

let verda= true;


/*ARRAYS *//*

let panes = new Array();
let panesVerda = [pan,verda,iva,precio];

alert(panesVerda.toString)
let mensaje1 =["Pan","panes","joe"]
for(let letra of mensaje1){
    alert(letra)
}
let punto = prompt("punto"),ge =prompt("ge")
alert(quevedo(punto,ge))
function quevedo (punto, ge){
    return( punto+" "+ge)
}

let pass1 = 1234
let pass2 = 1235

let mensaje= (pass1==pass2)?"Contraseña correca":"Contraseña incorrecta"
alert(mensaje)
*/

/*
Aleatorio 

let max, min;
let numeroaleatorio = Math.floor(Math.random()* (max - min + 1)) + min;
*/

/*
EJERCICIO 1. 
Escribe la función pedirNombres() que solicite al usuario una serie de nombres de propiedades CSS y se guarden en un array. 
El tamaño del array se decidirá de manera dinámica, ya que se seguirán pidiendo nombres mientras que el usuario introduzca 
cadenas de caracteres válidas (solo texto). Se parará de pedir nombres cuando el usuario introduzca un número. El array 
creado se devuelve como resultado de la función.
*/

function pedirNombres() {

    let palabras = [];
    let condition = false;

    do {
        let palabra = prompt('palabra')
        if(isNaN(palabra)){
            palabras.push(palabra);
        }else{
            condition=true;
        }
    } while (!condition);
    
}

/*
EJERCICIO 2.
Escribe la función camelize(str). Esta función recibe un único parámetro del tipo String. Se espera que la función convierta 
palabras separadas por guion (por ejemplo, ‘border-left-radius’) en palabras con notación camelCase (por ejemplo, ‘borderLeftRadius’). 

Es decir, que elimine todos los guiones y que cada palabra después de un guion comience con mayúscula (contando a partir de 
la segunda palabra). El resultado de la conversión será devuelto por la función.
*/

function camelize(str){
    let palabras = str.split('-');
    
    for (let i = 1; i < palabras.length; i++) {
        let palabra = palabras[i];
        let primeraLetra = palabra.charAt(0).toUpperCase();      
        palabra = primeraLetra.concat(palabra.substring(1));
        palabras[i]=palabra;
    }
    return palabras.join('');

}

let palabra = camelize(prompt('inserte su palabra aqu'))
alert(palabra)

/*
EJERCICIO 3.
Escribe la función sortear(arr) que recibe como parámetro un array de tamaño indeterminado y devuelve uno de los elementos 
del array escogido al azar.
*/

/*
EJERCICIO 4.
Escribe una función principal() que llame al método realizado en el ejercicio 1, utilice la función del ejercicio 2 para 
convertir todos los textos a la notación camelCase y termine eligiendo un elemento al azar utilizando la función del ejercicio 
3. Este método debe ser llamado una vez ha finalizado la carga de la página web.
*/





