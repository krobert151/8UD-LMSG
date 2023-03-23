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
let palabras = new Array();
let salir = false;
do{
    let palabra = prompt("Diga una palabra");
    if(palabra!="0"){
        let palabraFuera = palabras.pop();
        palabras.push(palabra);
        alert(palabras.join(" "));
    }else{
        salir =true;
    }
}while(!salir);

alert(palabras.join (' '));










