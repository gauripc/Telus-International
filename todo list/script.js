document.querySelector('#push').onclick = function() {
    if (document.querySelector('#newtask input').value.length == 0) {
        alert("Kindly Enter Task Name!!!!")
    } else {
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                
            </div>
            <div class="task">
                <button class="edit">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        let current_tasks = document.querySelectorAll(".delete");
        let edit_buttons = document.querySelectorAll(".edit");

        for (let i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }

        for (let i = 0; i < edit_buttons.length; i++) {
            edit_buttons[i].onclick = function() {
                let taskname = this.parentNode.querySelector("#taskname").textContent;
                let newTaskName = prompt("Edit your task:", taskname);
                if (newTaskName) {
                    this.parentNode.querySelector("#taskname").textContent = newTaskName;
                }
            }
        }
    }
}
