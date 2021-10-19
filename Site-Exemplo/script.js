alert("Está mensagem está referenciada de um script externo do arquivo index")

var button = document.querySelector('button')

button.onclick = function(){
    var nome = prompt("Qual seu nome?")
    alert('Olá ' + nome +','+'obrigado por conhecer meu site!')
    var preco = prompt("Qual o preço do item que deseja comprar?")
    var parcelas = prompt("Qual o prazo de pagamento?")
       
        if (preco > 1000){
          ValorSemJuros =(preco/parcelas) 
          ValorPrestacao=ValorSemJuros+(ValorSemJuros * 0.10)
        }
        else{
          ValorPrestacao =(preco/parcelas)
        }

        alert ("Você irá pagar "+parcelas +" parcelas no valor de "+ ValorPrestacao +" reais")
        alert ("Obrigado por comprar conosco!")



}
