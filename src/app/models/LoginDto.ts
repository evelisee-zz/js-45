import { LoginForm } from './Login';

export class LoginDTO {
    email = "";
    password = "";

    constructor({email, senha}: LoginForm){
        this.email = email; 
        this.password = senha;
    }
}