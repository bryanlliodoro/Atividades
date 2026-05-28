function adicionarTarefa() {
    const inputElement = document.getElementById('nova_tarefa');
    const mensagemElement = document.getElementById("mensagem");
    const listaTarefas = document.getElementById("lista_tarefas");
    const contagemTarefas = document.getElementById('contador');

    let tarefa = inputElement.value;
    let mensagem, cor;

    if (tarefaValida(tarefa)) {
        let novaTarefa = document.createElement('li');
        novaTarefa.textContent = tarefa;
        listaTarefas.appendChild(novaTarefa);
        contagemTarefas.textContent = listaTarefas.children.length;
        mensagem = "Adicionado com sucesso";
        cor = 'green';
    } else {
        mensagem = "Tarefa inválida, redigite.";
        cor = 'red';
    }

    mensagemElement.textContent = mensagem;
    mensagemElement.style.color = cor;
    inputElement.value = '';
    inputElement.focus();

    atualizarBotaoExcluir(); 
}

function tarefaValida(tarefa) {
    return tarefa.trim().length >= 5;
}

function excluirTarefa() {
    const listaTarefas = document.getElementById("lista_tarefas");
    const contagemTarefas = document.getElementById('contador');
    const mensagemElement = document.getElementById("mensagem");

    listaTarefas.innerHTML = '';
    contagemTarefas.textContent = 0;
    mensagemElement.textContent = "Tarefas foram excluídas!";
    mensagemElement.style.color = "purple";

    atualizarBotaoExcluir(); 
    document.getElementById('nova_tarefa').focus();
}

function atualizarBotaoExcluir() {
    const listaTarefas = document.getElementById("lista_tarefas");
    const botao = document.getElementById("botao_excluir");
    botao.style.display = listaTarefas.children.length > 0 ? "block" : "none";
}