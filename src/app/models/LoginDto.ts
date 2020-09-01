import { LoginForm } from './login.interface';

export class LoginDTO {
    email = "";
    password = "";

    constructor({email, senha}: LoginForm){
        this.email = email; 
        this.password = senha;
    }
}