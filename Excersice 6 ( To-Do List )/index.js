function Save_Details() {
    let taskValue = document.getElementById("TaskVAlue").value.trim();
    let authorName = document.getElementById("AuthorName").value.trim();

    if (!taskValue || !authorName) {
        alert("Please enter both task and author name.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Check if we are editing an existing task
    let editingIndex = document.getElementById("TaskVAlue").dataset.index;
    if (editingIndex !== undefined && editingIndex !== "") {
        tasks[editingIndex] = { task: taskValue, author: authorName };
        document.getElementById("TaskVAlue").dataset.index = ""; // Clear editing mode
    } else {
        tasks.push({ task: taskValue, author: authorName });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("TaskVAlue").value = "";
    document.getElementById("AuthorName").value = "";
    displayTasks();
}

function displayTasks() {
    let taskTableBody = document.getElementById("taskTableBody");
    taskTableBody.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach((task, index) => {
        let row = `<tr>
            <td>${task.task}</td>
            <td>${task.author}</td>
            <td>
                <button  class="btn btn-outline-primary" onclick="editTask(${index})">Edit</button>
                <button  class="btn btn-outline-danger" onclick="deleteTask(${index})">Delete</button>
            </td>
        </tr>`;
        taskTableBody.innerHTML += row;
    });
}

function editTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    document.getElementById("TaskVAlue").value = tasks[index].task;
    document.getElementById("AuthorName").value = tasks[index].author;
    document.getElementById("TaskVAlue").dataset.index = index;
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

window.onload = displayTasks;
