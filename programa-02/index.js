var js_nome
var js_sobrenome
var js_nomecompleto

function concatena() {
    js_nome = document.FormConcatena.nome.value
    js_sobrenome = document.FormConcatena.sobrenome.value

    js_nomecompleto = js_nome + ' ' + js_sobrenome

    window.alert('Olá ' + js_nomecompleto)
}