// definir constantes para uso no código
const btnAdd = document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa');
const taskList = document.getElementById('taskList');
const titulo = document.getElementById('titulo');

let nome = prompt("Qual o seu nome?")
if (nome == "") {
    titulo.innerHTML = "Lista de tarefa Generica";
    tarefa.focus();
}
else {
    titulo.innerHTML = `Lista de tarefa: ${nome}`;
    tarefa.focus();
}
//acompanha o evento de clique do botão adicionar tarefa
btnAdd.addEventListener("click", criaTarefa);

//ENVIO COM O ENTER
tarefa.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') criaTarefa();
  });
  
//
function criaTarefa() {
    if (tarefa.value==""){
        alert("digite o nome de sua tarefa")
    } else{
    const listItem = document.createElement('li');
    listItem.textContent = tarefa.value;
    taskList.appendChild(listItem);

    //criar botão de deletar tarefa
    const removeButton = document.createElement('button');
    removeButton.id = "remove";
    removeButton.textContent = "x";
    
    removeButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
    })

    //criar botão de concluir tarefa
    const concluirButton = document.createElement('button');
    concluirButton.id = "conclui";
    concluirButton.textContent = "✓";

    concluirButton.addEventListener("click", function () {
        listItem.classList.toggle('completed');
    })

    //cria div para organizar botões
    let buttonsItem = document.createElement('div');
    buttonsItem.classList.toggle('buttonsItem')
    //inclui botões na div
    listItem.appendChild(buttonsItem);
    buttonsItem.appendChild(concluirButton);
    buttonsItem.appendChild(removeButton);

    //apaga input após o envio
    tarefa.value = '';
    tarefa.focus(); // Retorna o foco para o campo de entrada
    }
    
}
