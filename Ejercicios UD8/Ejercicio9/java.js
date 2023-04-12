

function mirarMayusculas(str) {
    let enMius = str.toLowerCase()
    let enMays = str.toUpperCase()

    if(str===enMius){
        alert("La cadena es minus")
    }else if(str===enMays){
        alert("La cadena es mayus")
    }else{
        alert("no es ni mayus ni minus")
    }


}

mirarMayusculas(prompt("Ingrese una cadena"));