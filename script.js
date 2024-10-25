document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from Local Storage when the page loads
  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((taskText) => addTask(taskText, false)); // 'false' prevents duplicate saving
  }

  // Function to add a task to the list and save it to Local Storage
  function addTask(taskText, save = true) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Create and add the remove button to each task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-btn");

    // Add click event to remove button
    removeButton.addEventListener("click", () => {
      listItem.remove();
      removeTask(taskText);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    // Save task to Local Storage
    if (save) {
      const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  // Function to remove a task from Local Storage
  function removeTask(taskText) {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = storedTasks.filter((task) => task !== taskText);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  }

  // Event listeners for adding tasks
  addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
      addTask(taskText); // `save` defaults to true
      taskInput.value = ""; // Clear input field
    } else {
      alert("Enter a task");
    }
  });

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText); // `save` defaults to true
        taskInput.value = ""; // Clear input field
      } else {
        alert("Enter a task");
      }
    }
  });

  // Initial load of tasks
  loadTasks();
});
