let nome = prompt('Digite seu nome: ');
let sobrenome = prompt('Digite seu sobre nome: ');

function showNavigator() {
    document.getElementById("saida").innerHTML = 'Nome Completo: ' + nome + ' ' + sobrenome + '<br>' + '<br>' + 'Nome Catalago: ' + sobrenome.toUpperCase() + ' ' + nome;

}

function showAlert() {
    alert('Nome Completo: ' + nome + ' ' + sobrenome);
    alert('Nome Catalago: ' + sobrenome.toUpperCase(), + ' ' + nome);
}