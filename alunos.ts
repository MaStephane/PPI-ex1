import{Disciplina} from "./disciplina"
import{Estudante, Curso} from "./estudante"

let aluno1 = new Estudante(12341, 'Yasmin', Curso.INT_INFO)
let aluno2 = new Estudante(12342, 'José', Curso.INT_INFO,2)
let aluno3 = new Estudante(12343, 'Amanda', Curso.SUB_REDES,2)
let aluno4 = new Estudante(12344, 'Roberto', Curso.INT_INFO,4)

let ppi = new Disciplina(1, 'Programação para Internet', 'PPI', '60h', 'Bruno',[], [])
let poo = new Disciplina(2, 'Programação orientada a Objetos', 'POO', '60h', 'Bruno', [], [])


if(ppi.matricular(aluno1)){
    console.log(` Yasmin está matriculado(a)! :) `)
}else{
    console.log(` Yasmin não está matriculado(a)! :( `)
}
ppi.matricular(aluno1)
console.log(ppi.obterMatriculados()) //estudante 1 

if(ppi.matricular(aluno2)){
    console.log(`José está matriculado(a)! :) `)
}else{
    console.log(` José não está matriculado(a)! :( `)
}
ppi.matricular(aluno2)
console.log(ppi.obterMatriculados())//estudante 2

if(ppi.matricular(aluno3)){
    console.log(` Amanda está matriculado(a)! :) `)
}else{
    console.log(` Amanda não está matriculado(a)! :( `)
}
ppi.matricular(aluno3)
console.log(ppi.obterMatriculados()) //estudante 3

if(poo.matricular(aluno4)){
    console.log(` Roberto está matriculado(a)! :) `)
}else{
    console.log(` Roberto não está matriculado(a)! :( `)
}
ppi.matricular(aluno4)
console.log(poo.obterMatriculados()) //estudante 4

