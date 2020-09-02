export class EmailDto {
    destinatario = "";
    assunto = "";
    conteudo = "";

    constructor({to, subject, content}){
        this.destinatario = to;
        this.assunto = subject;
        this.conteudo = content;
    }
}  