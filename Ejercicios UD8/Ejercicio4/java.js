var valores = [true, 5, false, "hola", "adios", 2];
var textos = new Array();
let textosI = 0;


for (const va of valores) {
    if(typeof va === "string"){
        textos [textosI] = va
    }
}

let longerText = textos[0];
for (const text of textos) {
    if(longerText.lenth>text.lenth){
        longerText=text
    }
}

alert(longerText);

