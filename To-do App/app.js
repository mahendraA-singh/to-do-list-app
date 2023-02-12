const form = document.querySelector('form');
const input = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const todo = input.value;
  if (!todo) {
    return;
  }
  input.value = '';
  const todoElement = document.createElement('li');
  const todoText = document.createElement('span');
  const deleteButton = document.createElement('button');
  todoText.textContent = todo;
  deleteButton.textContent = 'Delete';
  todoElement.appendChild(todoText);
  todoElement.appendChild(deleteButton);
  todoList.appendChild(todoElement);
  deleteButton.addEventListener('click', () => {
    todoElement.remove();
  });
});
