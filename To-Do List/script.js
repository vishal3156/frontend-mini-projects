const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteButton">Delete</button>
        `;
        taskList.appendChild(listItem);
        taskInput.value = '';

        const deleteButton = listItem.querySelector('.deleteButton');
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });
    }
}