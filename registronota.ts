import {Boletim} from "./boletim"

export class RegistroNota{
  Notas: Boletim[] = [];

  //Métodos
  inserirnoBoletim(b1:number,b2:number,b3:number,b4:number){
      const boletim = new Boletim(b1,b2,b3,b4)
      this.Notas.push(boletim)
      return boletim
  }
}