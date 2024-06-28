class PersonaProva{

    private nome:string
    cognome:string

    constructor(_nome:string, _cognome:string){
        this.nome = _nome;
        this.cognome = _cognome;
    }

    mostraNome(){
        console.log(this.nome);
    }

}

const persona = new PersonaProva('Mario', 'Rossi')

console.log(persona);
//console.log(persona.nome)//essendo private non posso accedere a questa proprietà


//posso creare la classe e le sue proprietà anche così
class PersonaProvaAbbreviata{

    constructor(public nome:string, public cognome:string){}

}