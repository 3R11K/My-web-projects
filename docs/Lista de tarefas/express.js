const express = require('express');
const app = express();

// define uma rota
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('Servidor iniciado na porta 3000');
});

function DataLoad() {
  const sqlite3 = require('sqlite3').verbose();
  // abre o banco de dados
  const db = new sqlite3.Database('db/TASKS.db');

  // executa uma consulta
  db.all('SELECT * FROM TODO', (err, rows) => {
    // processa o resultado da consulta
    console.log(rows);
  });

  // fecha a conexão com o banco de dados
  db.close();
}
function insertTask() {
  const sqlite3 = require('sqlite3').verbose();
  // cria uma nova instância do banco de dados
  const data = new sqlite3.Database('db/TASKS.db');

  var nameTask = document.getElementById('nameTask').value;
  var description = document.getElementById('description').value;

  const sql = 'INSERT INTO NAME_TODO (name, description) VALUES (?, ?)';
  const values = ["play","something"];

  data.run(sql, values, function(err) {
    if (err) {
      console.log(err.message);
    } else {
      console.log('Registro inserido com sucesso!');
    }
  });

  data.all('SELECT * FROM TODO', (err, rows) => {
    // processa o resultado da consulta
    console.log(rows);
  });

  // fecha a conexão com o banco de dados
  data.close();
}