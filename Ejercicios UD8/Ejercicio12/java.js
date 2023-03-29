let tam = prompt('Indica el tamaño del arrray');

let array = new Array(parseInt(tam));
for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random() * 100);
}
alert(array);

function ordenarArray(numeros) {
    numeros.sort(function (a, b) {
        return a - b;
        }
    )
    alert(numeros);
}

ordenarArray(array);