function Add(){
    document.getElementById("taskEditor").style = "width:70vw";
}

function verify(){
    var name = document.getElementById('nameTask').value;
    var description = document.getElementById('description').value;

    console.log(name, description)
    const xhr = new XMLHttpRequest;
    const url = "http://127.0.0.1:3031/verify/" + name;

    xhr.open("GET",url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log("succefuly connected")
            var res = JSON.parse(xhr.responseText);
            console.log(res)

            if(res.AddTask === true){
                Card();
                DB(name,description);
            }
            else{
                error();
            };
         }
    }
    xhr.send();
}

function Card(){

    var nameTask = document.getElementById('nameTask').value;
    var description = document.getElementById('description').value;

    if (nameTask != "" && description != ""){
        //adcionar task na tela
        var nameTask = document.getElementById('nameTask').value;
        var description = document.getElementById('description').value;
        document.getElementById("taskEditor").style = "width:0vw";
        
        var taskConteiner = document.createElement('div');
        taskConteiner.id= 'taskConteiner'

        var div = document.createElement('div');
        div.id = 'taskCard';
        div.innerHTML = nameTask;
        div.className = 'TaskCard';

        var taskContent = document.createElement('p');
        taskContent.id = 'descriptionCard';
        taskContent.innerHTML = description

        document.getElementById("todo").appendChild(taskConteiner).append(div, taskContent);
        
        
    }
    document.getElementById("taskEditor").style = "width:0vw";
};

function error(){
    document.getElementById("taskEditor").style = "width:0vw";

    var div = document.createElement('div');
    div.id = 'error';
    div.innerHTML = "The task already exists";
    div.className = 'error';

    document.getElementById("content").appendChild(div);

    var element = document.getElementById("error")

    element.style = "heigth:100px";

        
    setTimeout(function(){
        element.parentNode.removeChild(element);
        element.style = "heigth:0px";
    },4000);
    

}
function DB(name, description){

    var data = {nameTask: name,
        descriptionTask: description
    };

    var json = JSON.stringify(data)

    const xhr = new XMLHttpRequest();
    const url = "http://127.0.0.1:3031/insert";

    xhr.open("POST",url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            console.log("succefuly inserted")
        }
    }
    xhr.send(json);
};
