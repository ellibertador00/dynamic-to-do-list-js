  document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById("task-list");

  function addTask() {
    var taskText = taskInput.value.trim();
    if (taskText === "") {
      alert('Enter a task');
      return;
    }
      var List = document.createElement('li');
      List.textContent = taskText;
          
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
    //removeButton.className = 'remove-btn';
    removeButton.classList.add("remove-btn");
       
      removeButton.addEventListener('click', () => {
        List.remove();
      })

      List.appendChild(removeButton);
      taskList.appendChild(List);
      taskInput.value = "";
    }

    addButton.addEventListener('click', () => {
      addTask();
    })

    taskInput.addEventListener('keypress', (event) => {
      if (event.key == 'Enter') {
        addTask();
      }
    })
  

  }
)




