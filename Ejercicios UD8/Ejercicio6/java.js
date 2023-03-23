
let dni;
let letra;
let numLetra;
let letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
do {
    dni = prompt("Inserte su número del DNI");
} while (dni>99999999 || dni<=0);

numLetra = dni % 23;
alert(numLetra)
do{
    letra= prompt("Escriba su letra")
}while(typeof letra !== "string" || letra.length != 1)

if(letras[numLetra]==letra){
    alert("El dni coincide con la letra")
}else{
    alert("No coincide")
}


