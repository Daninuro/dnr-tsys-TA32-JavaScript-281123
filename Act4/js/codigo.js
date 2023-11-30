var valores = [true, 5, false, "hola", "adios", 2];

// Act.1
if (valores[3].length > valores[4].length) {
    console.log("La palabra '" +valores[3] + "' tiene mas letras que la palabra '" + valores[4]+"'");
} else if (valores[3].length < valores[4].length) {
    console.log("La palabra '" +valores[3] + "' tiene menos letras que la palabra '" + valores[4]+"'");
} else if (valores[3].length == valores[4].length) {
    console.log("La palabra '" +valores[3] + "' tiene las mismas letras que la palabra '" + valores[4]+"'");
}

//Act.2
if (valores[0])
{
    console.log("El valor del Array 1 es true");
} else {
    console.log("El valor del Array 1 es false");
}

if (valores[2])
{
    console.log("El valor del Array 3 es true");
} else {
    console.log("El valor del Array 3 es false");
}

//Act.3
console.log("Suma: " + (valores[1] + valores[5]));
console.log("Resta: " + (valores[1] - valores[5]));
console.log("Multiplicacion: " + (valores[1] * valores[5]));
console.log("Division: " + (valores[1] / valores[5]));
console.log("Modulo: " + (valores[1] % valores[5]));