interface iSmartPhone{
    credito:number;
    numeroChiamate:number;
}

class User implements iSmartPhone{
    credito: number = 0;
    numeroChiamate: number = 0;
    costoMinuto:number = 0.2;
    nome:string;
    cognome:string;

    constructor(_nome:string, _cognome:string){
        this.nome = _nome
        this.cognome = _cognome       
    }

    set ricarica(n:number){
        this.credito += n
    }

    chiamata(minutiChiamata:number):void{
        let costo = this.costoMinuto * minutiChiamata;
        this.credito -= costo
        this.numeroChiamate += minutiChiamata
    }

    get chiama404():string{
        return `Il credito residuo è di: ${this.credito}€`
    }

    getNumeroChiamate():number{
        return this.numeroChiamate
    }

    azzeraChiamate():void{
        this.numeroChiamate = 0;
    }

}

const user1 = new User('Mario','Rossi')

console.log('Credito prima della ricarica: '+user1.credito);//0

user1.ricarica = 10
user1.chiamata(5)

console.log(user1.chiama404);//10
