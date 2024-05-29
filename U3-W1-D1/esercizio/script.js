"use strict";
class User {
    constructor(_nome, _cognome) {
        this.credito = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.2;
        this.nome = _nome;
        this.cognome = _cognome;
    }
    set ricarica(n) {
        this.credito += n;
    }
    chiamata(minutiChiamata) {
        let costo = this.costoMinuto * minutiChiamata;
        this.credito -= costo;
        this.numeroChiamate += minutiChiamata;
    }
    get chiama404() {
        return `Il credito residuo è di: ${this.credito}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
const user1 = new User('Mario', 'Rossi');
console.log('Credito prima della ricarica: ' + user1.credito); //0
user1.ricarica = 10;
user1.chiamata(5);
console.log(user1.chiama404); //10
