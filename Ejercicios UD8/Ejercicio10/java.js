let palabra = prompt("Palabra");
palabra = palabra.split(" ").join("");
let verda =true;

for (let i = 0; i < palabra.length; i++) {
    if(palabra.charAt(i)===palabra.charAt(palabra.length-i-1)){
    }else{
        verda = false;
    }
}

if(verda){
    alert("Palabra palindroma");
}else{
    alert("Palabra no palindroma");
}
