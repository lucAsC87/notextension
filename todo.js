let cookieString = document.getElementById("ft-list");
document.cookie = `list = what; expires=Fri, 17 Mar 2023 12:00:00 UTC`;
document.getElementById("new_do").addEventListener("click", addTask)

function addTask() {
    let task = prompt("Add new task:");
    if (task) {
        const newDiv = document.createElement("div");
        const newTask = document.createTextNode(task);
        newDiv.appendChild(newTask);
        const taskList = document.getElementById("ft_list");
        taskList.insertBefore(newDiv, taskList.children[0]);
        newDiv.addEventListener("click", function() {
            if (confirm("Remove task?")) {
                newDiv.remove()           
                }
            });
        }
}

