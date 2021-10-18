alert("Está mensagem está referenciada de um script externo do arquivo index")

var button = document.querySelector('button')

button.onclick = function(){
    var nome = prompt("Qual seu nome?")
    alert('Olá ' + nome +','+'obrigado por conhecer meu site!')


}
