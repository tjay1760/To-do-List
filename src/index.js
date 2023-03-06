import getSavedTodoItems from '../modules/createList.js';
import checkboxCheck from '../modules/checkbox.js';
import './index.css';

const todoListItem = document.querySelector('.activity');
const todoList = document.getElementsByClassName('todo-list')[0];
const clearButton = document.querySelector('.clear');
let todoItems = [];
function saveTodoItems() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}
function fixindex() {
  for (let i = 0; i < todoItems.length; i += 1) {
    todoItems[i].index = i;
  }
  saveTodoItems();
}
// function checkboxCheck() {
//   const checkboxes = document.querySelectorAll('.checkbox');
//   for (let i = 0; i < checkboxes.length; i += 1) {
//     if (checkboxes[i].checked) {
//       todoItems[i].completed = true;
//     }
//   }
// }

function addTodo(todo) {
  const todolistObj = {
    description: todo,
    completed: false,
    index: todoItems.length,
  };
  todoItems.push(todolistObj);
  saveTodoItems();
}

function editItem(label) {
  const editItem = document.querySelectorAll('.edit-item');
  label.contentEditable = true;
  label.addEventListener('blur', () => {
    for (let i = 0; i < editItem.length; i += 1) {
      todoItems[i].description = editItem[i].innerText;
    }
    saveTodoItems();
  });
}

todoItems = getSavedTodoItems();
function displayTodoItems() {
  todoList.innerHTML = '';
  for (let i = 0; i < todoItems.length; i += 1) {
    const todoItem = todoItems[i];
    const item = document.createElement('li');
    item.classList.add('list-item');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = todoItem.completed;
    checkbox.classList.add('checkbox');
    const label = document.createElement('label');
    label.htmlFor = 'checkbox';
    label.innerText = todoItem.description;
    label.classList.add('edit-item');
    const icon = document.createElement('i');
    icon.className = 'fas fa-ellipsis-v';
    icon.classList.add('icon');
    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(icon);
    const itemId = todoItem.index;
    item.setAttribute('data-id', itemId);
    todoList.appendChild(item);
    editItem(label);
  }
  fixindex();

  const icons = Array.from(document.querySelectorAll('.icon'));

  function toggleDeleteIcon(icon) {
    icon.classList.toggle('fa-trash-alt');
    icon.classList.toggle('fa-ellipsis-v');
  }

  icons.forEach((icon) => {
    icon.addEventListener('mouseover', () => {
      toggleDeleteIcon(icon);
    });

    icon.addEventListener('mouseout', () => {
      toggleDeleteIcon(icon);
    });
  });
}
function deleteTodoItem() {
  for (let i = todoItems.length - 1; i >= 0; i -= 1) {
    if (todoItems[i].completed === true) {
      todoItems.splice(i, 1);
    }
  }
  saveTodoItems();
  displayTodoItems();
}
displayTodoItems();
todoListItem.addEventListener('keydown', (event) => {
  if (event.keyCode === 13) {
    addTodo(todoListItem.value);
    todoListItem.value = '';
    event.preventDefault();
    displayTodoItems();
  }
});
clearButton.addEventListener('click', () => {
  checkboxCheck(todoItems);
  deleteTodoItem();
});

todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-trash-alt')) {
    const itemId = parseInt(event.target.closest('.list-item').getAttribute('data-id'), 10);
    todoItems = todoItems.filter((item) => item.index !== itemId);
    saveTodoItems();
    displayTodoItems();
  }
});