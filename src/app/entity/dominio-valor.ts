import {Trace} from "./Trace";

export class DominioValor  extends Trace {
  public id: number;
  public codigo: number;
  public descricao: string;
  public valorTexto: string;
  public valorNumerico: number;
  public valorData: Date;
  public ativo: string;

  constructor(id: number,codigo: number,  descricao: string,   valorTexto: string,   valorNumerico: number,
              valorData: Date, ativo: string, usuarioRegistro: string, dataRegistro: Date,   usuarioModificacao: string,
              dataModificacao: Date) {
    super(usuarioRegistro, dataRegistro,   usuarioModificacao,   dataModificacao);
    this.id = id;
    this.codigo = codigo;
    this.descricao = descricao;
    this.valorTexto = valorTexto;
    this.valorNumerico = valorNumerico;
    this.valorData = valorData;
    this.ativo = ativo;
  }

}
