type PersonaTypeGeneric<T,U> = {
    nome:T;
    cognome:T;
    anni:U
}

let oggetto:PersonaTypeGeneric<string, number> = {
    nome: "",
    cognome: "",
    anni: 0
}

function sommaConcatena<T>(a:T, b:T):T{
    return (a as any) + b
}

const concatenamento = sommaConcatena<string>('Hello ','World!')
const sum = sommaConcatena<number>(5,8)