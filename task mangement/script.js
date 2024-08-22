let tasks = [];

document.querySelector('#newtask input[type="button"]').onclick = function() {
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#date').value;

    if (!title) {
        alert("Kindly Enter Task Name!!!!");
        return;
    }

    tasks.push({
        id: tasks.length + 1,
        title,
        description,
        dueDate,
        completed: false
    });

    renderTasks();
    clearInputs();
}

function renderTasks(filter = 'all') {
    const taskContainer = document.querySelector('#tasks');
    taskContainer.innerHTML = '';

    tasks
        .filter(task => filter === 'all' || (filter === 'completed' ? task.completed : !task.completed))
        .forEach(task => {
            const taskHTML = `
                <div class="task" id="task-${task.id}">
                    <span id="taskname">
                        <strong>Title:</strong> ${task.title}<br>
                        <strong>Description:</strong> ${task.description}<br>
                        <strong>Date:</strong> ${task.dueDate}
                    </span>
                    <div class="task-buttons">
                        <button onclick="toggleComplete(${task.id})">Complete</button>
                        <button onclick="editTask(${task.id})">Edit</button>
                        <button onclick="deleteTask(${task.id})">Delete</button>
                    </div>
                </div>
            `;
            taskContainer.innerHTML += taskHTML;
        });
}

function clearInputs() {
    document.querySelector('#title').value = '';
    document.querySelector('#description').value = '';
    document.querySelector('#date').value = '';
}

function toggleComplete(id) {
    const task = tasks.find(t => t.id === id);
    if (task) task.completed = !task.completed;
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    const newTitle = prompt("Edit Task Title:", task.title) || task.title;
    const newDescription = prompt("Edit Task Description:", task.description) || task.description;
    const newDate = prompt("Edit Task Due Date:", task.dueDate) || task.dueDate;

    task.title = newTitle;
    task.description = newDescription;
    task.dueDate = newDate;
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

// Filtering and Searching
document.querySelectorAll('input[name="filter"]').forEach(radio => {
    radio.addEventListener('change', () => renderTasks(radio.id));
});

document.querySelector('#search').addEventListener('input', function() {
    const searchText = this.value.toLowerCase();
    renderTasks('all');
    tasks = tasks.filter(task => task.title.toLowerCase().includes(searchText));
    renderTasks();
});
