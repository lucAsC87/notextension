document.getElementById("new_do").addEventListener("click", addTask);
const taskList = document.getElementById("ft_list");
let localList = localStorage.getItem("tasks");
if (localList) {
  taskList.innerHTML = localList;
}

function addTask() {
  let task = prompt("Add new task:");
  if (task) {
    const newListEl = document.createElement("li");
    const newTask = document.createTextNode(task);
    newListEl.appendChild(newTask);
    taskList.insertBefore(newListEl, taskList.children[0]);
    localStorage.setItem("tasks", taskList.innerHTML);
    newListEl.addEventListener("click", function () {
      deleteItem(newListEl);
    });
  }
}

const listItems = taskList.getElementsByTagName("li");
for (const listItem of listItems) {
  listItem.addEventListener("click", function () {
    deleteItem(listItem);
  });
}

function deleteItem(item) {
  if (confirm(`Remove ${item.textContent}?`)) {
    item.remove();
    localStorage.setItem("tasks", taskList.innerHTML);
  }
}
