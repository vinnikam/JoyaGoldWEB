import {Trace} from "./Trace";

export class Feriado extends Trace{
  id: number;
  nome: string;
  data: Date;

  constructor(id: number, nome: string,   data: Date,
              userRegister: string, dateRegister: Date,   userUpdate: string,   dateUpdate: Date) {
    super(userRegister, dateRegister,   userUpdate,   dateUpdate);
    this.id = id;
    this.nome = nome;
    this.data = data;
  }
}
