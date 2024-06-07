const express = require('express');
const app = express();
const PORT = 3000;

// Dados dos alunos
const alunos = [
  { RA: '0001070292321029', nome: 'Gabriel Costa', email: 'gabriel.costa111@fatec.sp.gov.br' },
  { RA: '0001070292321030', nome: 'Lucas Silva', email: 'lucas.silva222@fatec.sp.gov.br' },
  { RA: '0001070292321031', nome: 'Helena Pontes', email: 'helena.pontes333@fatec.sp.gov.br' }
];

// Rota para /alunos
app.get('/alunos', (req, res) => {
  res.json(alunos);
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`API está hospedada corretamente na porta ${PORT}`);
});