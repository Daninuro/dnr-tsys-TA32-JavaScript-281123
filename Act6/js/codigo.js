var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

function calcularLetra() {

    var numero = parseInt(document.getElementById('Numero').value, 10);
    var letraIngresada = document.getElementById('Letra').value.toUpperCase();


    if (numero > 0 && numero < 999999999) {

        var letraCalculada = letras[numero % 23];

        if (letraIngresada === letraCalculada) {
            alert("La letra especificada coincide con la calculada!");
        } else {
            alert("La letra especificada no coincide con la calculada!");
        }
    } else {
        alert("El número debe estar en el rango de 1 a 999,999,999");
    }
}