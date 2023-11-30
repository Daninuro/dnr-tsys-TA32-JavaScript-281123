
function calcParImpar() {
    var number = document.getElementById('numero').value;

    return ((number % 2 == 0) ? "El numero es PAR" : "El numero es IMPAR");
}