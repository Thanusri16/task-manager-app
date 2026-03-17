function addTask() {
    let taskInput = document.getElementById("taskInput").value;
    let priority = document.getElementById("priority").value;

    if (taskInput === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = taskInput + " (" + priority + ")";

    li.onclick = function () {
        this.style.textDecoration = "line-through";
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteBtn);

    document.getElementById("taskList").appendChild(li);

    document.getElementById("taskInput").value = "";
}
