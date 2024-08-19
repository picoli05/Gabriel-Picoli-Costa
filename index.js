"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
const calcularMedia = (notas) => notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
const nomeAluno = prompt('Informe o nome do estudante: ');
const notasAluno = [];
for (let i = 0; i < 4; i++) {
    notasAluno.push(parseFloat(prompt(`Informe a nota ${i + 1}: `)));
}
const estudante = {
    nome: nomeAluno,
    notas: notasAluno,
    media: calcularMedia(notasAluno)
};
console.log(estudante);
