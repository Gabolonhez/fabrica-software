const projectsList = document.getElementById("projects-list");
const newProjectInput = document.getElementById("new-project");
const addButton = document.getElementById("add-project");

function addProject() {
  const newProjectName = newProjectInput.value.trim();

  if (!newProjectName) {
    alert("Insira o nome do projeto");
    return;
  }

  // Cria o item da lista
  const newItem = document.createElement("li");
  newItem.classList.add("project", "em-andamento");

  // Adiciona o nome do projeto
  const projectName = document.createElement("span");
  projectName.textContent = newProjectName;
  newItem.appendChild(projectName);

  // Cria a caixa de seleção
const selectBox = document.createElement("select");
selectBox.classList.add("project-status");

  // Adiciona as opções à caixa de seleção
  const options = ["Em andamento", "Concluído", "Pausado"];
  options.forEach(optionText => {
    const option = document.createElement("option");
    option.value = optionText.toLowerCase().replace(" ", "-");
    option.textContent = optionText;
    selectBox.appendChild(option);
  });
  
  newItem.appendChild(selectBox);

  // Cria o botão de remover
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.addEventListener("click", removeProject);
  newItem.appendChild(removeButton);

  // Adiciona o novo item à lista de projetos
  projectsList.appendChild(newItem);

  // Limpa o campo de entrada
  newProjectInput.value = "";
}

function removeProject(event) {
  const project = event.target.parentNode;
  projectsList.removeChild(project);
}

// Adiciona um evento de clique ao botão de adicionar projeto
addButton.addEventListener("click", addProject);
