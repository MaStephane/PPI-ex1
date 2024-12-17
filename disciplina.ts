import { Estudante} from "./estudante";
import {RegistroNota} from "./registronota";
import { Boletim } from "./boletim"

export class Disciplina {
    
    //Atributos
    private id: number
    private nome:string
    private sigla: string
    private cargahoraria:string
    private docente:string
    private matriculados: Estudante[]
    private notas: RegistroNota[]


    constructor(id:number, nome:string, sigla:string, ch:string, docente:string,
         matriculados: Estudante[] = [], notas: RegistroNota[] = []
        ) {
        this.id = id
        this.nome = nome
        this.sigla = sigla
        this.cargahoraria = ch
        this.docente = docente
        this.matriculados = []
        this.notas= []
    }
    adicionarRegistroNota(matr: number, bol:Boletim){

    }

    //Métodos
    matricular(est: Estudante): boolean {
        if (est && !this.estaMatriculado(est)) {
            this.matriculados.push(est)
            return true
        } 
        return false
    }
    obterMatriculados():Estudante[]{
        return this.matriculados
    }
    estaMatriculado(est: Estudante): boolean {
        for (let pos = 0; 
                 pos < this.matriculados.length; 
                 pos++) {
           if (this.matriculados[pos].obterMatricula() ==
               est.obterMatricula()) {
                return true
            } 
        }
        return false
    }
    obterDisciplina():string{
        return this.nome
    }
    alterarDisciplina(nome: string){
        this.nome = nome
    }
    /*ObterEstudante(mat: number)Estudante[]{

    }*/
    obterSigla():string{
        return this.sigla
    }
    alterarSigla(sigla: string){
        this.sigla = sigla
    }
    obterDocente():string{
        return this.docente
    }
    alterarDocente(docente: string){
        this.docente = docente
    }
    obterCH():string{
        return this.cargahoraria
    }
    alterarCH(ch: string){
        this.cargahoraria = ch
    }
    obterId():number{
        return this.id
    }
    obterNotas(): RegistroNota[]{
        return this.notas
    }
}