function somma(a:number, b:number):number{
    return a + b;
}

let risultato = somma(2,2)


function sostraSomma(a:number, b:number):void{
    console.log(a + b);
}


//b è facoltativo, quindi posso verificare la sua esistenza per evitare errori
function somma2(a:number, b?:number):number{

    if(b){
        return a + b;
    }else{
        return a
    }
}

//b è facoltativo, ed ha un valore predefinito
function somma3(a:number, b:number = 0):number{

    return a + b;

}