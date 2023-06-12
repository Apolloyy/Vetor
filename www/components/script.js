
var nomes = []
var adicionar

function Vetor(){

if(adicionar != "") 
{
    adicionar  = document.getElementById("nome").value
    nomes.push(adicionar)
    alert (nomes)
}

else{
    alert("Nenhum valor inserido, escreva algo.");
}

}


function Inicio(){

if(adicionar != "") {
    adicionar  = document.getElementById("nome").value
    nomes.unshift(adicionar)
    alert (nomes)
}

else{
    alert("Nenhum valor inserido, escreva algo.");
}

}

function RemoveFinal(){
    nomes.pop()
    alert (nomes)
}

function RemoveInicio(){
    nomes.shift()
    alert(nomes)
}

function Posicao(){
    alert (nomes)
}

function Pesquisar() {
    var usuario = prompt("Qual posição você quer checar?");
    alert(nomes[usuario]);
}


function Lista(){
    var divlista = document.getElementById('lista');
    for (var i=0; i<nomes.length; i++) 
    {
        var lista = document.createElement('li');
        lista.innerHTML = nomes[i];
        divlista.appendChild(lista);
    }
}

function Clear() {
    var divclear = document.getElementById('lista').innerHTML = "";
    alert("A lista foi limpa!");
}