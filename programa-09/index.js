/* Objetivo : Exemplos prático de aplicações com Operador Ternario ?:, Operadores Relacionais e Expressões Aritimeticas. 
Utilizando a sintaxe: (<condição>) ? <expressão para resultado verdadeiro> : <expressão para resultado falso>
*/ 

// Definição de variaveis:

document.write('<p>--------------------------------------------------...</p>')
document.write('<p>DEFINIÇÃO E ATRIBUIÇÃO DE VARIAVEIS:</p>')
document.write('<p>let js_num = <b>30</b>; (js_num recebe 30)</p>')

let js_num = 30

// Aplicação de Operador Ternario utilizando Operadores Relacionais:

document.write('<p>--------------------------------------------------...</p>')
document.write('<p>OPERADOR TERANRIO <b>(? :)</b> COM OPERADORES RELACIONAIS (==, !=, <):</p>')

document.write('<P>js_num <b>==</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => </P>')
((js_num == 20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'))

document.write('<p>js_num <b>!=</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => </p>')
((js_num != 20) ? document.write('<b>SIM</b>') : document.write('<b>NÃO</b>'))

document.write('<p>js_num <b><</b> 50 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => </p>')
((js_num < 50) ? document.write('<b>SIM</b>') : document.write('<b>NÂO</b>'))

// Aplicação de Operdor Ternario utilizando Expressões Aritimeticas e Operdores Relacionais:

document.write('<p>--------------------------------------------------...</p>')
document.write('<p>OPERADOR TERNARIO COM EXPRESSÃO ARITIMETICA</p>')

document.write('<p>(js_num <b>-</b> 20) <b>==</b> 0 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta => </p>')
((js_num - 20) == 0) ? document.write('<b>SIM</b>' + js_num) : document.write('<b>NÃO</b>')

