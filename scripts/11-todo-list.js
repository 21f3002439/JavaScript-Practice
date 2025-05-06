const todoListData = [
  {name: "Amit", dueDate: '07-12-1998'},
  {name: "Priya", dueDate: '04-01-2003'}
];

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
      onclick="todoListData.splice(${i}, 1);
      console.log(todoListData);
      renderTodoList();"
      class="delete-todo-button"
    >Delete</button>`;

    todoListHtml += html;

    // console.log(todoListHtml)
  }

  document.querySelector('.js-todo-render').innerHTML = todoListHtml;
}

function todoList() {
  const nameInput = document.querySelector('.js-name-input');
  const dueDateInput = document.querySelector('.js-due-date-input');

  const name = nameInput.value;
  const dueDate = dueDateInput.value;

  todoListData.push({
    //name = name,
    //dueDate = dueDate

    name,
    dueDate
  })
  // console.log(todoListData)

  nameInput.value = '';
  dueDate.value = '';
  

  renderTodoList()

}






