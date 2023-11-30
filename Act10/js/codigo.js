function calcPalindromity() {
    var stringToCheck = document.getElementById('string').value.toString();

    // Quitar los espacios
    stringToCheck.replaceAll(" ", "");

    // Convertir toda la cadena a minúsculas
    stringToCheck.toLowerCase();

    // Invertir la cadena
    var aux = stringToCheck.split("").reverse().join("");

    // Verificar si es un palindromo o no
    if (stringToCheck === aux) {
        alert("La frase escrita SI es un palindromo");
    } else {
        alert("La frase escrita NO es un palindromo");
    }
}