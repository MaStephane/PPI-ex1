"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disciplina = void 0;
class Disciplina {
    constructor(id, nome, sigla, ch, docente, matriculados = [], notas = []) {
        this.id = id;
        this.nome = nome;
        this.sigla = sigla;
        this.cargahoraria = ch;
        this.docente = docente;
        this.matriculados = [];
        this.notas = [];
    }
    adicionarRegistroNota(matr, bol) {
    }
    //Métodos
    matricular(est) {
        if (est && !this.estaMatriculado(est)) {
            this.matriculados.push(est);
            return true;
        }
        return false;
    }
    obterMatriculados() {
        return this.matriculados;
    }
    estaMatriculado(est) {
        for (let pos = 0; pos < this.matriculados.length; pos++) {
            if (this.matriculados[pos].obterMatricula() ==
                est.obterMatricula()) {
                return true;
            }
        }
        return false;
    }
    obterDisciplina() {
        return this.nome;
    }
    alterarDisciplina(nome) {
        this.nome = nome;
    }
    /*ObterEstudante(mat: number)Estudante[]{

    }*/
    obterSigla() {
        return this.sigla;
    }
    alterarSigla(sigla) {
        this.sigla = sigla;
    }
    obterDocente() {
        return this.docente;
    }
    alterarDocente(docente) {
        this.docente = docente;
    }
    obterCH() {
        return this.cargahoraria;
    }
    alterarCH(ch) {
        this.cargahoraria = ch;
    }
    obterId() {
        return this.id;
    }
    obterNotas() {
        return this.notas;
    }
}
exports.Disciplina = Disciplina;
