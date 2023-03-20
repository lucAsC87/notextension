document.getElementById("new_do").addEventListener("click", addTask);

function addTask() {
  let task = prompt("Add new task:");
  if (task) {
    const newListEl = document.createElement("li");
    const newTask = document.createTextNode(task);
    newListEl.appendChild(newTask);
    const taskList = document.getElementById("ft_list");
    taskList.insertBefore(newListEl, taskList.children[0]);
    newListEl.addEventListener("click", function () {
      if (confirm(`Remove ${newListEl.textContent}?`)) {
        newListEl.remove();
      }
    });
  }
}
