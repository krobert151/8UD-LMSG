

function delreves(str) {
    (str=str.split('').reverse().join(''))?alert("es Palindromo"):alert("No es palindromo");
}

delreves(prompt("Ingrese una palabra"));

