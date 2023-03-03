const todoListItem = document.querySelector('.activity');
const todoList = document.getElementsByClassName('todo-list')[0];
const clearButton = document.querySelector('.clear');
let todoItems = [
  {
    description: 'create a new todo',
    completed: false,
    index: 0,
  },
  {
    description: 'create a new todo',
    completed: false,
    index: 1,
  },
  {
    description: 'create a new todo',
    completed: false,
    index: 2,
  },
  {
    description: 'create a new todo',
    completed: false,
    index: 3,
  },
];
function saveTodoItems() {
  localStorage.setItem('todoItems', JSON.stringify(todoItems));
}
function fixindex() {
  for (let i = 0; i < todoItems.length; i += 1) {
    todoItems[i].index = i;
  }
  saveTodoItems();
}
function checkboxCheck() {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    if (checkboxes[i].checked) {
      todoItems[i].completed = true;
    }
  }
  return todoItems;
}

function addTodo(todo) {
  const todolistObj = {
    description: todo,
    completed: false,
    index: todoItems.length,
  };
  todoItems.push(todolistObj);
  saveTodoItems();
}
function getSavedTodoItems() {
  const savedData = localStorage.getItem('todoItems');
  return savedData ? JSON.parse(savedData) : todoItems;
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
    item.appendChild(checkbox);
    item.appendChild(label);
    item.appendChild(icon);
    const itemId = todoItem.index;
    item.setAttribute('data-id', itemId);
    todoList.appendChild(item);
    editItem(label);
  }
  fixindex();
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
  checkboxCheck();
  deleteTodoItem();
});