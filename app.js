//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []; // Declaração de um array para armazenar os amigos
let amigosDisponiveis = []; // Criamos um array separado para armazenar os amigos ainda disponíveis para sorteio

function adicionarAmigo() {
    const input = document.getElementById("amigo"); // Captura o campo de entrada
    const nome = input.value.trim(); // Obtém o valor digitado e remove espaços extras
    
    if (nome === "") { 
        alert("Por favor, insira um nome."); // Verifica se o campo está vazio
        return;
    }

    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado."); // Verifica se o nome já foi adicionado à lista
        return;
    }

    
    amigos.push(nome); // Adiciona o nome ao array de amigos e ao array de amigos disponíveis
    amigosDisponiveis.push(nome);
    input.value = ""; // Limpa o campo de entrada
    atualizarLista(); // Atualiza a lista exibida
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Seleciona a lista de amigos na página
    lista.innerHTML = ""; // Limpa a lista para evitar duplicações

    for (let amigo of amigos) {  // Percorre o array de amigos e adiciona cada nome à lista exibida
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigosDisponiveis.length === 0) { // Verifica se ainda há amigos disponíveis para sorteio
        alert("Todos os amigos já foram sorteados. A lista será reiniciada.");
        reiniciarLista();
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigosDisponiveis.length); // Gera um índice aleatório dentro do tamanho do array de amigos disponíveis
    const amigoSorteado = amigosDisponiveis.splice(indiceSorteado, 1)[0]; // Obtém o nome sorteado e remove-o da lista de disponíveis para evitar repetições

    const resultado = document.getElementById("resultado"); // Exibe o nome sorteado na tela
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarLista() {
    amigosDisponiveis = [...amigos]; // Repreenche a lista de amigos disponíveis com os nomes originais
    document.getElementById("resultado").innerHTML = ""; // Limpa a exibição do resultado do sorteio
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}

