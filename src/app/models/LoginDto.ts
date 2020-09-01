export interface LoginForm {
    email: string;
    senha: string;
}

export class LoginDTO {
    email = "";
    password = "";

    constructor({ email, senha}: LoginForm){
        this.email = email;
        this.password = senha;
    }
}