function Add(){
    var input = document.getElementById("AddTask").value;
    console.log(input);

    var div = document.createElement('div');
    div.id = 'task';
    div.innerHTML = input;
    div.className = 'taskCard';
    document.getElementById("todo").appendChild(div);

}