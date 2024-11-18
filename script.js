const input = document.getElementById('input');
const button1 = document.getElementById('button1');
const todolist = document.getElementById('dotolist');


button1.addEventListener('click', function() {
    const newtask = document.createElement('li');
    const completeButton = document.createElement('button'); 
    const deleteButton = document.createElement('button');  

    newtask.textContent = input.value;  
    completeButton.textContent = 'Complete'; 
    deleteButton.textContent = 'Delete task';  

    newtask.appendChild(completeButton);
    newtask.appendChild(deleteButton);
    todolist.appendChild(newtask);

    input.value = '';

    completeButton.classList.add('complete');
    completeButton.addEventListener('click', function() {
        newtask.style.textDecoration= 'line-through'; 
        completedTaskCount++;
        updateTaskCounters();
    });
    
    totalTaskCount++; 
    updateTaskCounters();

    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        newtask.remove(); 
        totalTaskCount--;
        completedTaskCount--;
    updateTaskCounters();
    
    });
});
const totaltask = document.createElement('div');
totaltask.textContent = 'Total Tasks: 0';
document.body.appendChild(totaltask);

const completetask = document.createElement('div');
completetask.textContent = 'Completed Tasks: 0';
document.body.appendChild(completetask);

let totalTaskCount = 0;
let completedTaskCount = 0;

function updateTaskCounters() {
    totaltask.textContent = `Total Tasks: ${totalTaskCount}`;
    completetask.textContent = `Completed Tasks: ${completedTaskCount}`;
  }
  

  

