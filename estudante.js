"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudante = exports.Curso = void 0;
var Curso;
(function (Curso) {
    Curso["INT_INFO"] = "T\u00E9cnico Integrado em Inform\u00E1tica";
    Curso["INT_MECA"] = "T\u00E9cnico Integrado em Mecatr\u00F4nica";
    Curso["SUB_REDES"] = "T\u00E9cnico Subsequente em Redes";
})(Curso || (exports.Curso = Curso = {}));
// Atributos
class Estudante {
    constructor(mat, nome, curso = Curso.INT_INFO, per = 1) {
        this.matricula = mat;
        this.nome = nome;
        this.curso = curso;
        this.per = per;
    }
    // Métodos para matrícula
    obterMatricula() {
        return this.matricula;
    }
    alterarMatricula(mat) {
        this.matricula = mat;
    }
    // Métodos para nome
    obterNome() {
        return this.nome;
    }
    alterarNome(nome) {
        this.nome = nome;
    }
    // Métodos para curso
    obterCurso() {
        return this.curso; // Retorna o nome do curso
    }
    alterarCurso(curso) {
        this.curso = curso;
    }
    // Métodos para período
    obterPeriodo() {
        return this.per;
    }
    alterarPeriodo(per) {
        if (per >= 1 && per <= 4) {
            this.per = per;
            return true;
        }
        else {
            this.per = 1;
            return false;
        }
    }
}
exports.Estudante = Estudante;
let estudante1 = new Estudante(12345, 'Amanda', Curso.INT_MECA);
let estudante2 = new Estudante(12346, 'Dayane', Curso.INT_INFO, 2);
console.log(estudante1.obterNome(), estudante1.obterPeriodo(), estudante1.obterMatricula(), estudante1.obterCurso());
console.log(estudante2.obterNome(), estudante2.obterPeriodo(), estudante2.obterMatricula(), estudante2.obterCurso());
estudante1.alterarCurso(Curso.SUB_REDES);
estudante2.alterarPeriodo(3);
console.log('Após alterações:');
console.log(estudante1.obterNome(), estudante1.obterPeriodo(), estudante1.obterMatricula(), estudante1.obterCurso());
console.log(estudante2.obterNome(), estudante2.obterPeriodo(), estudante2.obterMatricula(), estudante2.obterCurso());
