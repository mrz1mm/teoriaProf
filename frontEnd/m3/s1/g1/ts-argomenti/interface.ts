//le interfacce sono solo descrittive, non possono contenere valori
interface iLogin {
    email:string;
    password:string;
}
//i metodi delle interfacce non possono avere implementazione
interface iLoginMethod{
    login():void
}

class User implements iLogin, iLoginMethod{
    constructor(
        public email: string,
        public password: string
    ){}
    login(): void {
        throw new Error("Method not implemented.");
    }
}