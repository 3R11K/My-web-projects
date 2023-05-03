function Add(){
    document.getElementById("taskEditor").style = "width:70vw";
}

function Card(){

    var nameTask = document.getElementById('nameTask').value;
    var description = document.getElementById('description').value;

    if (nameTask != "" && description != ""){
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

}