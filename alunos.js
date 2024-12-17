"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const disciplina_1 = require("./disciplina");
const estudante_1 = require("./estudante");
let aluno1 = new estudante_1.Estudante(12341, 'Yasmin', estudante_1.Curso.INT_INFO);
let aluno2 = new estudante_1.Estudante(12342, 'José', estudante_1.Curso.INT_INFO, 2);
let aluno3 = new estudante_1.Estudante(12343, 'Amanda', estudante_1.Curso.SUB_REDES, 2);
let aluno4 = new estudante_1.Estudante(12344, 'Roberto', estudante_1.Curso.INT_INFO, 4);
let ppi = new disciplina_1.Disciplina(1, 'Programação para Internet', 'PPI', '60h', 'Bruno', [], []);
let poo = new disciplina_1.Disciplina(2, 'Programação orientada a Objetos', 'POO', '60h', 'Bruno', [], []);
if (ppi.matricular(aluno1)) {
    console.log(` Yasmin está matriculado(a)! :) `);
}
else {
    console.log(` Yasmin não está matriculado(a)! :( `);
}
ppi.matricular(aluno1);
console.log(ppi.obterMatriculados()); //estudante 1 
if (ppi.matricular(aluno2)) {
    console.log(`José está matriculado(a)! :) `);
}
else {
    console.log(` José não está matriculado(a)! :( `);
}
ppi.matricular(aluno2);
console.log(ppi.obterMatriculados()); //estudante 2
if (ppi.matricular(aluno3)) {
    console.log(` Amanda está matriculado(a)! :) `);
}
else {
    console.log(` Amanda não está matriculado(a)! :( `);
}
ppi.matricular(aluno3);
console.log(ppi.obterMatriculados()); //estudante 3
if (poo.matricular(aluno4)) {
    console.log(` Roberto está matriculado(a)! :) `);
}
else {
    console.log(` Roberto não está matriculado(a)! :( `);
}
ppi.matricular(aluno4);
console.log(poo.obterMatriculados()); //estudante 4
