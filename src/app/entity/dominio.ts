import {Trace} from "./Trace";
import {DominioValor} from "./dominio-valor";

export class Dominio extends Trace{

  public id: number;
  public nome: string;
  public descricao: string;
  public tipoValor: string;
  public dominioValores ?: DominioValor[];

  constructor(id: number, nome: string,   descricao: string,   tipoValor: string,
              usuarioRegistro: string, dataRegistro: Date,   usuarioModificacao: string,   dataModificacao: Date) {
    super(usuarioRegistro, dataRegistro,   usuarioModificacao,   dataModificacao);
    this.id = id;
    this.nome = nome;
    this.descricao = descricao;
    this.tipoValor = tipoValor;

  }

}
