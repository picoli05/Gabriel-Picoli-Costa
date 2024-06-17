import express from "express"
import { getAll, findByKey, create } from "./database/index.js"
import Tarefa from "./models/tarefa.js";
import Usuario from "./models/usuario.js";
import Cliente from "./models/cliente.js";

const app = express()
const port = 3000
app.use(express.json())

app.get('/tarefas', (req, res) => {
    const tarefas = getAll('tarefas')
    res.json(tarefas)
})

app.get('/usuarios', (req, res) => {
    const usuarios = getAll('usuarios')
    res.json(usuarios)
})

app.get('/clientes', (req, res) => {
    const clientes = getAll('cliente')
    res.json(clientes)
})

app.get('/primeira-tarefa', (req, res) => {
    const tarefa = findByKey(0, 'tarefas');
    res.json(tarefa);
});

app.get('/primeiro-usuario', (req, res) => {
    const usuario = findByKey(0, 'usuarios');
    res.json(usuario);
});

app.get('/tarefas/:key', (req, res) => {
    const { key } = req.params;
    const tarefa = findByKey(key, 'tarefas');
    
    if (!tarefa) res.status(404).json({ erro: "Tarefa não encontrada" });

    res.json(tarefa);
});

app.post('/tarefas', (req, res) => {
    const { id, titulo } = req.body;
    const tarefa = new Tarefa(id, titulo);
    create(tarefa, 'tarefas');
    res.json(tarefa);
});

app.post('/usuarios', (req, res) => {
    const { id, nome, email } = req.body;
    const usuario = new Usuario(id, nome, email);
    create(usuario, 'usuarios');
    res.status(200).send('Usuario cadastrado com sucesso');
    console.log('Dados da requisição', req.body);
});

app.post('/clientes', (req, res) => {
    const { id, nome, cnpj } = req.body;
    const cliente = new Cliente(id, nome, cnpj);
    create(cliente, 'clientes');
    res.status(200).send('Cliente cadastrado com sucesso');
    console.log('Dados da requisição', req.body);
});

app.listen(port, () => {
    console.log(`Servidor executando em http://localhost:${port}`)
})
