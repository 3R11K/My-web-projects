const express = require('express');
const app = express();
const bodyParser = require('body-parser')

//Conectar com banco de dados
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('TASKS.DB', (err) =>{
    if(err){
        console.error(err.message)
    }
    console.log('Conectado à TASKS');
});

//Colocar front-end

app.use(express.static("../"))

app.get("/", function(req,res){
    res.sendFile("/index.html");
});

//ler body em formato json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//inserindo taks no banco de dados

app.get("/verify/:name", function(req,res){
    var checkName;
    var checkDescription;

    const nameTask = req.params.name;

    console.log(nameTask)

    db.all(`SELECT * FROM NAME_TODO WHERE NAME = ${nameTask}`, function(err,row){
        if(row){
            res.json({AddTask:false});
        }
        else{
            res.json({AddTask:true});
        }
        console.log(row)
    })
});

app.post("/insert", function(req,res){
    const nameTask = req.body.nameTask;
    const descriptionTask = req.body.descriptionTask;

    console.log("Inserindo tarefa: " + nameTask + ", descrição: " + descriptionTask);

    db.run("INSERT INTO NAME_TODO(NAME) VALUES(?)", [nameTask], function(err){
        if(err){
            console.log("Erro ao inserir nome da tarefa: " + err);
            res.status(500).send("Erro ao inserir nome da tarefa");
        }
    });
    db.run("INSERT INTO DESCRIPTION_TODO(DESCRIPTION) VALUES(?)", [descriptionTask], function(err){
        if(err){
            console.log("Erro ao inserir descrição da tarefa: " + err);
            res.status(500).send("Erro ao inserir descrição da tarefa");
        }
    });

    res.status(200).send("Dados inseridos com sucesso");
});

//Endereço web
app.listen(3031,() =>{
    console.log("Iniciado em http://127.0.0.1:3031/")
})
