"use strict";
//questa è una delle modalità con cui si possono tipizzare gli oggetti
//va dichiarata ogni proprietà ed il suo tipo
//la presenza di un punto interrogativo indica che la proprietà è facoltativa
let obj = {
    nome: 'Mario',
    cognome: 'Rossi'
};
console.log(obj.nome);
if (obj.anni) { //essendo anni facoltativa, dobbiamo verificare la sua esistenza prima di fare un qualsiasi utilizzo di questa proprietà
    console.log(obj.anni);
}
//posso tipizzare gli oggetti anche usando una classe
class Persona {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
}
const mario = {
    nome: "",
    cognome: ""
};
const maria = {
    nome: "Maria",
    cognome: "Rossi"
};
const carla = {
    nome: "Carla",
    cognome: "Rossi"
};
