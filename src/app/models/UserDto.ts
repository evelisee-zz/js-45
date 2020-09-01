export interface User {
    nome: string;
    username: string;
    senha: string;
    telefone: string;
    avatar: string;
}

export class UserDTO {
    name = "";
    username = "";
    password = "";
    phone = "";
    avatar = "";

    constructor({ nome, username, senha, telefone, avatar}: User){
        this.name = nome;
        this.username = username;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;
    }
}