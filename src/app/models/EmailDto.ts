export interface EmailApi {
    to: string;
    subject: string;
    content: string;
    createdAt: string;
    id: string;
}

export class EmailDto {
    destinatario = "";
    assunto = "";
    conteudo = "";
    dataDeEnvio = "";
    id = "";

    constructor({to, subject, content, createdAt, id}: EmailApi){
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
        this.dataDeEnvio = createdAt;
        this.id = id;
    }

    get introducaoDoConteudo(): string {
        if(this.conteudo.length >= 140) {
            return this.conteudo.substr(0, 140) + '...';
        } else {
            return this.conteudo
        }
    }
}
  