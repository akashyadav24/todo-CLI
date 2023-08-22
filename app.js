const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tasks = [];

function addTask(task) {
  tasks.push({ task, completed: false });
  console.log('Task added successfully!');
}

function viewTasks() {
  tasks.forEach((task, index) => {
    const status = task.completed ? '✔️' : '❌';
    console.log(`${index + 1}. ${status} ${task.task}`);
  });
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Task marked as completed.');
  } else {
    console.log('Invalid task index.');
  }
}

function startApp() {
  rl.question('Welcome to the To-Do List App!\nEnter "add" to add a task, "view" to view tasks, "complete" to mark a task as completed, or "exit" to quit: ', (choice) => {
    if (choice == 'add') {
      rl.question('Enter the task: ', (task) => {
        addTask(task);
        startApp();
      });
    } else if (choice == 'view') {
      viewTasks();
      startApp();
    } else if (choice == 'done') {
      viewTasks();
      rl.question('Enter the index of the task to mark as completed: ', (index) => {
        completeTask(index - 1);
        viewTasks();
        startApp();
      });
    } else if (choice === 'exit') {
      rl.close();
    } else {
      console.log('Invalid choice.');
      startApp();
    }
  });
}

startApp();
