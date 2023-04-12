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

crearParrafo(prompt('¿Quiere pan?'));