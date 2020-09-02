interface EmailApi {
    to: string;
    subject: string;
    content: string;
}

export class EmailDto {
    destinatario = "";
    assunto = "";
    conteudo = "";

    constructor({to, subject, content}: EmailApi){
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
    }
}  