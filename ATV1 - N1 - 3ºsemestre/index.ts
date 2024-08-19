import promptSync from 'prompt-sync';

const prompt = promptSync();

interface Estudante {
    nome: string;
    notas: number[];
    media: number;
}

const calcularMedia = (notas: number[]): number => 
    notas.reduce((soma, nota) => soma + nota, 0) / notas.length;

const nomeAluno = prompt('Informe o nome do estudante: ');
const notasAluno: number[] = [];

for (let i = 0; i < 4; i++) {
    notasAluno.push(parseFloat(prompt(`Informe a nota ${i + 1}: `)));
}

const estudante: Estudante = {
    nome: nomeAluno,
    notas: notasAluno,
    media: calcularMedia(notasAluno)
};

console.log(estudante);
