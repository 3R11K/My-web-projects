function insert(num)
{
    var Tela = document.getElementById('resultado').innerHTML;
    if(Tela == "None")
    {
        clean()
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero+num
    }
    else
    {
        var numero = document.getElementById('resultado').innerHTML;
        document.getElementById('resultado').innerHTML = numero+num
    }
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function calc()
{
    var resultado = document.getElementById('resultado').innerHTML
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "None";
    }
}

