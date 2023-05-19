import {Trace} from "./Trace";

export class Domain extends Trace{
  id: number;
  name: string;
  description: string;
  typeValue: string;

  constructor(id: number, name: string,   description: string,   typeValue: string,
              userRegister: string, dateRegister: Date,   userUpdate: string,   dateUpdate: Date) {
    super(userRegister, dateRegister,   userUpdate,   dateUpdate);
    this.id = id;
    this.name = name;
    this.description = description;
    this.typeValue = typeValue;
  }
}
