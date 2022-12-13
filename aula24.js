/* Aula 24 Desafio Refatoracao */

// ELEMENTOS DA 1a CARTA APENAS
let nome          = document.querySelector('#nome')
let acompanhamentos = document.querySelector('#acompanhamentos')


// section que acomoda todas as cartas
let sectionConteudos = document.querySelector('.conteudos')

// ENDERECO DO ARQUIVO JSON
const url = 'cards.json'

function pegarDados(i) {
  fetch(url)
    .then( response => response.json() )
    .then( dados => {
        if(dados.erro) {
            console.log("Erro ao acessar o JSON")
            return
        }
       
    
        let qtdPizza = (dados.ingredientes.length)
        
        // passe o valor de i no parametro
        atribuirDados2(dados, i)
    })
} // fim pegarDados

// atribuir dados individualmente, ou seja, so para uma carta
// ela so funciona se for chamada dentro da funcao pegarDados
function atribuirDados(dados, i) {
   
    nome.textContent          = dados.ingredientes[i].nome
    acompanhamentos.textContent = dados.ingredientes[i].acompanhamentos
   
}

// SELECIONAR TODOS OS CARDS por class

let nomesPizza      = document.getElementsByClassName('nome')
let nomeAcompanhamentos = document.getElementsByClassName('acompanhamentos')

// ATRIBUIR DADOS PARA TODOS OS CARDs
// Selecionamos eles por class, com isso temos um array para cada elemento
// agora vamos atribuir para cada posicao os valores que pegamos
function atribuirDados2(dados, i) {
    
    nomesPizza[i].textContent         = dados.ingredientes[i].nome
nomeAcompanhamentos [i].textContent = dados.ingredientes[i].acompanhamentos
 
}

// usamos as funcoes createElement e appendChild
// para criar article (elemento html que vai acomodar cada carta)
// criamos tambem img, h2 e h3. Depois colocamos eles dentro do article
function desenharCarta(id) {
    
    // CARD
    let carta = document.createElement("article")
    carta.setAttribute('class', 'card')
    sectionConteudos.appendChild(carta)

   

    // NOME 
    let nomesPizza = document.createElement("h2")
    nomesPizza.setAttribute('class', 'nome')
    carta.appendChild(nomesPizza)
    nomesPizza.textContent = "Nome"

    // ACOMPANHAMENTOS
    let nomeAcompanhamentos = document.createElement("h3")
    nomeAcompanhamentos.setAttribute('class', 'acompanhamentos')
    carta.appendChild(nomeAcompanhamentos)
    nomeAcompanhamentos.textContent = "acompanhamentos"

    

    pegarDados(id)
}

// 1a carta pegamos os dados. Ela ja esta desenhada na tela
pegarDados(0)

// 2a carta em diante desenhamos em tela usando as funcoes
//desenharCarta(0)
desenharCarta(1)
desenharCarta(2)
desenharCarta(3)
desenharCarta(4)
desenharCarta(5)
desenharCarta(6)
desenharCarta(7)
desenharCarta(8)
desenharCarta(9)
desenharCarta(10)
desenharCarta(11)
desenharCarta(12)
desenharCarta(13)
desenharCarta(14)
desenharCarta(15)






