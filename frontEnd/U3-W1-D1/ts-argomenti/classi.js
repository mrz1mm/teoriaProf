"use strict";
class PersonaProva {
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    mostraNome() {
        console.log(this.nome);
    }
}
const persona = new PersonaProva('Mario', 'Rossi');
console.log(persona);
//console.log(persona.nome)//essendo private non posso accedere a questa proprietà
//posso creare la classe e le sue proprietà anche così
class PersonaProvaAbbreviata {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
    }
}
