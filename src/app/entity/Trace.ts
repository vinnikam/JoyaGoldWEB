export class Trace{
  usuarioRegistro: string;
  dataRegistro: Date;
  usuarioModificacao: string;
  dataModificacao: Date;
  constructor(usuarioRegistro: string, dataRegistro: Date,   usuarioModificacao: string,   dataModificacao: Date) {
    this.usuarioRegistro = usuarioRegistro;
    this.dataRegistro = dataRegistro;
    this.usuarioModificacao = usuarioModificacao;
    this.dataModificacao = dataModificacao;
  }
}
