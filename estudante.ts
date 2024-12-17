export enum Curso {
    INT_INFO = 'Técnico Integrado em Informática',
    INT_MECA = 'Técnico Integrado em Mecatrônica',
    SUB_REDES = 'Técnico Subsequente em Redes'
}
// Atributos
export class Estudante {
    matricula: number;
    private nome: string;
    private curso: Curso;
    private per: number;

    constructor(mat: number, nome: string, curso: Curso = Curso.INT_INFO, per: number = 1) {
        this.matricula = mat;
        this.nome = nome;
        this.curso = curso;
        this.per = per;
    }

    // Métodos para matrícula
    obterMatricula(): number {
        return this.matricula;
    }
    alterarMatricula(mat: number): void {
        this.matricula = mat;
    }

    // Métodos para nome
    obterNome(): string {
        return this.nome;
    }
    alterarNome(nome: string): void {
        this.nome = nome;
    }

    // Métodos para curso
    obterCurso(): string {
        return this.curso; // Retorna o nome do curso
    }
    alterarCurso(curso: Curso): void {
        this.curso = curso;
    }

    // Métodos para período
    obterPeriodo(): number {
        return this.per;
    }
    alterarPeriodo(per: number): boolean {
        if (per >= 1 && per <= 4) { 
            this.per = per;
            return true;
        } else {
            this.per = 1;
            return false;
        }
    }
}


let estudante1 = new Estudante(12345, 'Amanda', Curso.INT_MECA);
let estudante2 = new Estudante(12346, 'Dayane', Curso.INT_INFO, 2);

console.log(estudante1.obterNome(), 
estudante1.obterPeriodo(), 
estudante1.obterMatricula(), 
estudante1.obterCurso());

console.log(estudante2.obterNome(), 
estudante2.obterPeriodo(), 
estudante2.obterMatricula(), 
estudante2.obterCurso());

estudante1.alterarCurso(Curso.SUB_REDES);
estudante2.alterarPeriodo(3);

console.log('Após alterações:');
console.log(estudante1.obterNome(), 
estudante1.obterPeriodo(), 
estudante1.obterMatricula(), 
estudante1.obterCurso());

console.log(estudante2.obterNome(), 
estudante2.obterPeriodo(), 
estudante2.obterMatricula(), 
estudante2.obterCurso());
