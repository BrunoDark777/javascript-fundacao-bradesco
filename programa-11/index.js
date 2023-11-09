/* Objetivo: Executar uma sequência de comando por uma quantidade indeterminada de vezes utilazando uma variável de controle (Valor lógico = True, por exemplo) no lugar de contadores delimitadores. O controle pode ser feito através de perguntas na tela, utilizando o método Confirm (Ok ou Cancelar, por exemplo). */

// Definição de variáveis

let js_contador = 1
let js_resposta = true

// Laço de Repetição Condicional - while utilizando controle de limitação pelo usúario

while(js_resposta == true){
    document.write('<p>' + js_contador + '&ordf; Repetição de uma única linha de comando dentro de um laço condicional: </p> ')
    js_contador += 1
    js_resposta = window.confirm('Deseja continuar?')
}
