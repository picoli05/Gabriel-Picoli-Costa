// Definindo a classe Estudante
class Estudante {
    constructor(nome, dataNascimento, ra, email, curso, disciplinas) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.ra = ra;
        this.email = email;
        this.curso = curso;
        this.disciplinas = disciplinas;
    }

    primeiraDisciplina() {
        return this.disciplinas[0];
    }

    ultimaDisciplina() {
        return this.disciplinas[this.disciplinas.length - 1];
    }
}

// Criando os objetos estudantes
const gabriel = new Estudante(
    "Gabriel Picoli Costa",
    "2005-05-20",
    "1050292321029",
    "gabriel.costa111@fatec.sp.gov.br",
    "Redes de Computadores",
    ["Fundamentos de Cálculo", "Laboratório de Desenvolvimento II", "Laboratório de Hardware e Redes", "LPAR 1", "Requisitos de Projeto de Redes", "Sistemas Operacionais"]
);

const lucas = new Estudante(
    "Lucas Santos",
    "2000-07-13",
    "1050292321040",
    "lucas.santos@fatec.sp.gov.br",
    "Redes de Computadores",
    ["Sistemas Operacionais", "Requisitos de Projeto de Redes", "LPAR 1", "Laboratório de Hardware e Redes", "Laboratório de Desenvolvimento II", "Fundamentos de Cálculo"]
);

// Exibindo os detalhes dos estudantes e suas disciplinas
console.log("Estudante: Gabriel");
console.log("Nome:", gabriel.nome);
console.log("Data de Nascimento:", gabriel.dataNascimento);
console.log("RA:", gabriel.ra);
console.log("E-mail:", gabriel.email);
console.log("Curso:", gabriel.curso);
console.log("Disciplinas:", gabriel.disciplinas);
console.log("Primeira Disciplina:", gabriel.primeiraDisciplina());
console.log("Última Disciplina:", gabriel.ultimaDisciplina());
console.log();

console.log("Estudante: Lucas");
console.log("Nome:", lucas.nome);
console.log("Data de Nascimento:", lucas.dataNascimento);
console.log("RA:", lucas.ra);
console.log("E-mail:", lucas.email);
console.log("Curso:", lucas.curso);
console.log("Disciplinas:", lucas.disciplinas);
console.log("Primeira Disciplina:", lucas.primeiraDisciplina());
console.log("Última Disciplina:", lucas.ultimaDisciplina());
