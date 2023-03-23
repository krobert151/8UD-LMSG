var valores = [true, 5, false, "aaaaaaaaaa", "adios", 2];
var textos = new Array();
var numeros = new Array();
let numerosI=0;
let textosI = 0;


for (const va of valores) {
    if(typeof va === "string"){
        textos [textosI] = va
        textosI++;
    }
}

let longerText = textos[0];
for (const text of textos) {
    if(longerText.lenth>text.lenth){
        longerText=text
    }
}

alert(longerText);

for (const valor of valores) {
    if(valor===true){
        alert("Es verdad")
    }
    if(valor===false){
        alert("Es mentira")
    }
}

for (const val of valores) {
    
    if(typeof val === "number"){
        numeros[numerosI]=val;
        numerosI++;
    }
}

alert(numeros[0]+numeros[1]/numeros[1]*numeros[0]-numeros[0])

