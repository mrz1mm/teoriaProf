//questa è una delle modalità con cui si possono tipizzare gli oggetti
//va dichiarata ogni proprietà ed il suo tipo
//la presenza di un punto interrogativo indica che la proprietà è facoltativa
let obj:{nome:string, cognome:string, anni?:number} = {
    nome: 'Mario',
    cognome: 'Rossi'
}

console.log(obj.nome)

if(obj.anni){//essendo anni facoltativa, dobbiamo verificare la sua esistenza prima di fare un qualsiasi utilizzo di questa proprietà
    console.log(obj.anni)
}

//posso tipizzare gli oggetti anche usando una classe
class Persona{
    constructor(public nome:string, public cognome:string){}
}

const mario:Persona = {
    nome: "",
    cognome: ""
}

//posso tipizzare gli oggetti anche usando una interfaccia
interface iPersona {
    nome:string;
    cognome:string;
}


const maria:iPersona = {
    nome: "Maria",
    cognome: "Rossi"
}

//posso tipizzare gli oggetti anche usando una interfaccia
type PersonaType = {
    nome:string;
    cognome:string;
}


const carla:iPersona = {
    nome: "Carla",
    cognome: "Rossi"
}