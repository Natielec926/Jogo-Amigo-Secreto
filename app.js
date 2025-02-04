//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
const listaAmigos = document.getElementById('listaAmigos');
const amigoInput = document.getElementById('amigo');
const resultado = document.getElementById('resultado');
let amigos = [];

function adicionarAmigo() {
    const nomeAmigo = amigoInput.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    amigos.push(nomeAmigo);
    const novoItemLista = document.createElement('li');
    novoItemLista.textContent = nomeAmigo;
    listaAmigos.appendChild(novoItemLista);
    amigoInput.value = ''; // Limpa o campo de entrada
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos dois amigos para o sorteio.');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `O amigo secreto sorteado é: <span>${amigoSorteado}</span>`;
}