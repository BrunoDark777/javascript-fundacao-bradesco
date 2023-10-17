/* Objetivo: Calcular o salario liquido de um funcionario que trabalha por hora (horista).
Para desenvolver o calculo é necessario as seguintes informações:
    - Quantidade de horas trabalhadas por mês (js_qht)
    - Valor de hora de trabalho (js_vht)
    - Persentual de desconto do INSS (js_inss) 
- Inoforme a classificação salarial
- Objeto / Metodo utilizado:
- Entrada : window.prompt
- Saida : window.write */


// Definição de variaveis:

let js_qht   // var de entrada : Quantidade de horas trabalhadas
let js_vht  // var de entrada : Valor de horas trabalhadas
let js_inss // var de entrada : Persentual de desconto do INSS
let js_tdes // var de saida : Total de descontos
let js_sb // var de saida : Valor de salario bruto
let js_sl // var de saida : Valor de salario liquido

// Entrada de Dados:

js_qht = parseFloat(window.prompt('Informe a quatidade de horas trabalhadas/mês: (135 a 180)', '00'))
js_vht = parseFloat(window.prompt('Informe o valor da hora trabalhada: (25 a 50)', '00'))
js_inss = parseFloat(window.prompt('Informe o persentual de desconto INSS: (5 a 15)', '00'))

// Processamento de Dados:

js_sb = js_vht * js_qht
js_tdes = (js_inss/100) * js_sb
js_sl = js_sb - js_tdes

// Saida de Dados com consistencia de valores:

document.write('<p><b>DEMOSTRATIVO PARA CALCULO DE SALARIO LIQUIDO</b></p>')

document.write('<p>Quantidade de horas trabalhadas (135 a 180)</p><b> ' + js_qht + '</b>')
if(js_qht > 180){
    document.write('<b>Valor Maximo excedido!</b>')
}
if(js_qht < 135){
    document.write('<b>Valor Minimo invalido!</b>')
}



