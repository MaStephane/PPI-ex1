import { Situação } from "./situacao"
 //Atributos
export class Boletim{
    b1: number
    b2: number
    b3: number
    b4: number
    mp: number
    md: number
    situação: Situação

    constructor(b1: number, b2:number, b3:number, b4:number){
        this.b1 = b1
        this.b2 = b2
        this.b3 = b3
        this.b4 = b4
        this.mp = this.calcularMediaParcial()
        this.md = this.calcularMediaFinal()
        this.situação = this.calcularSituação()
    }

    //Métodos
    calcularMediaParcial():number{
        return (this.b1*2 + this.b2*2+ this.b3*3+  this.b4*3) /10
        
    }
    calcularMediaFinal():number{
      return this.mp 
    }
    calcularSituação():Situação{
        if(this.mp >=60 ){
        return Situação.APROVADO
        } 
        if(this.mp < 10){
        return Situação.REPROVADO
        }
        else return Situação.PROVAFINAL
    }
}