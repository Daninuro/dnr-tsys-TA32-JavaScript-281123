
function calcFactorial() {
    var number = document.getElementById('numero').value;

    for (var i = (number - 1); i >= 1; i--)
    {
        number *= i;
    }

    document.getElementById("resultado").innerHTML = "El resultado es: " + number;
}