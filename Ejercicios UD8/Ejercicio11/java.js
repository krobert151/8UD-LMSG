
let size = prompt("Ingrese el tamaño del array:");

let array = new Array(parseInt(size));

for (let i = 0; i < array.length; i++) {
    array[i] = prompt(`Ingrese un número`);
}

let num;
do {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += parseInt(array[i]);
    }
    alert(suma);
    num = prompt("Ingrese un número");
    array.shift();
    array.push(num);
} while (num >= 0);





