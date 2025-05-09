const todoListData = JSON.parse(localStorage.getItem('todoListData')) || [];

// console.log(todoListData)

renderTodoList()

function renderTodoList() {
  let todoListHtml = '';

  for (let i=0; i < todoListData.length; ++i ) {
    const objectData = todoListData[i];
    const {name, dueDate} = objectData
    const html = `
    <div>${name} </div>
    <div> ${dueDate} </div>
    <button 
      onclick="
      todoListData.splice(${i}, 1);
      renderTodoList();

      // Whenever we update the todo list, save in localStorage.

      saveToStorage();"

      class="delete-todo-button"
    >Delete</button>`;

    todoListHtml += html;

    // console.log(todoListHtml)
  }

  document.querySelector('.js-todo-render').innerHTML = todoListHtml;
}

function todoList() {
  const nameInput = document.querySelector('.js-name-input');
  const name = nameInput.value;

  const dueDateInput = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInput.value;


  todoListData.push({
    //'name': name,
    //'dueDate': dueDate

    name,
    dueDate

  });
  

  // console.log(todoListData)

  nameInput.value = '';
  

  renderTodoList()

  // Whenever we update the todo list, save in localStorage.
  saveToStorage();

}

function saveToStorage() {
  localStorage.setItem('todoListData', JSON.stringify(todoListData));

  console.log(localStorage.todoListData)
}






