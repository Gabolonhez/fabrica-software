const projectsList = document.getElementById("projects-list");
const newProjectInput = document.getElementById("new-project");
const addButton = document.getElementById("add-project");

function addProject() {
  const newProjectName = newProjectInput.value.trim();

  if (!newProjectName) {
    alert("Por favor, insira o nome do projeto");
    return;
  }

  const newItem = document.createElement("li");
  newItem.classList.add("project", "em-andamento");
  newItem.textContent = newProjectName;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remover";
  removeButton.addEventListener("click", removeProject); // Call the removeProject function here
  newItem.appendChild(removeButton);

  projectsList.appendChild(newItem);

  newProjectInput.value = "";
}

function removeProject(event) {
  const project = event.target.parentNode;
  projectsList.removeChild(project);
}

projectsList.addEventListener("click", (event) => {
  if (event.target.classList.contains("Remove")) {
    removeProject(event); // Pass the event object to removeProject
  }
});

addButton.addEventListener("click", addProject);