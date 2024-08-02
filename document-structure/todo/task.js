const taskList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const taskAdd = document.getElementById('tasks__add');

function taskAdder(e) {
    e.preventDefault();
    if (taskInput.value === '') {
        return
    }
    
    let task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `<div class="task__title">
                        ${taskInput.value}
                      </div>
                      <a href="#" class="task__remove">&times;</a>`;
    taskList.appendChild(task);
    taskInput.value = '';
    let removeBtn = task.querySelector('.task__remove');
    
    removeBtn.addEventListener('click', (e) =>{
        task.remove();
    })
}

taskAdd.addEventListener('click', taskAdder)
