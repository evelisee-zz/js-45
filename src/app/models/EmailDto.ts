export interface EmailApi {
    to: string;
    subject: string;
    content: string;
    createdAt: string;
}

export class EmailDto {
    destinatario = "";
    assunto = "";
    conteudo = "";
    dataDeEnvio = "";

    constructor({to, subject, content, createdAt}: EmailApi){
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
        this.dataDeEnvio = createdAt;
    }

    get introducaoDoConteudo(): string {
        if(this.conteudo.length >= 140) {
            return this.conteudo.substr(0, 140) + '...';
        } else {
            return this.conteudo
        }
    }
}
  