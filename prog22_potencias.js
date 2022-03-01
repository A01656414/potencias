function ejecuta() {
    v1 = document.f_ciclos.v1.value;
    v2 = document.f_ciclos.v2.value;
    if (v1.lenght == 0) {
        alert("error, se debe indicar el valor de X, mayor a 1 y menor a 10")
    }
    if (v2.lenght == 0) {
        alert("error, se debe indicar el valor de Y, mayor a 1 y menor a 5")
    }
    if (v1 < 1 || v1 > 10) {
        document.f_ciclos.v1.style.background = "red";
        alert("error, se debe indicar el valor de X, mayor a 1 y menor a 10");
    }
    else {
        if (v2 < 1 || v2 > 5) {
            document.f_ciclos.v2.style.background = "red";
            alert("error, se debe indicar el valor de Y, mayor a 1 y menor a 5");
        }
        else {
            v1 = parseInt(v1);
            v2 = parseInt(v2);
            pot = 1;
            ctr = 1;

            while (ctr <= v2) { // empieza el ciclo
                pot = pot * v1;
                ctr = ctr + 1;
            } // termina el ciclo
            document.f_ciclos.res.value = pot;
        }
    }
}

function campos() {
    document.f_ciclos.v1.style.background = "blue";
    document.f_ciclos.v2.style.background = "blue";
}
