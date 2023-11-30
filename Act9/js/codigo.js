
function calcStringInfo() {
    var stringToCheck = document.getElementById('string').value.toString();

    alert(checkString(stringToCheck));
}

function checkString(stringToCheck) {
    var hasUppercase = false;
    var hasLowercase = false;
    var char = '';

    var i = 0;

    while (i < stringToCheck.length) {
        char = stringToCheck.charAt(i);

        if (char == char.toUpperCase()) {
            hasUppercase = true;
        }

        if (char == char.toLowerCase()) {
            hasLowercase = true;
        }

        i++;
    }

    if (hasUppercase && hasLowercase) {
        return "La cadena de texto tiene una combinacion de mayusculas y minusculas";
    } else if (hasUppercase && !hasLowercase) {
        return "La cadena de texto es en mayusculas";
    } else if (!hasUppercase && hasLowercase) {
        return "La cadena de texto es en minusculas";
    }
}