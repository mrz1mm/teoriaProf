"use strict";
function somma(a, b) {
    return a + b;
}
let risultato = somma(2, 2);
function sostraSomma(a, b) {
    console.log(a + b);
}
//b è facoltativo, quindi posso verificare la sua esistenza per evitare errori
function somma2(a, b) {
    if (b) {
        return a + b;
    }
    else {
        return a;
    }
}
//b è facoltativo, ed ha un valore predefinito
function somma3(a, b = 0) {
    return a + b;
}
