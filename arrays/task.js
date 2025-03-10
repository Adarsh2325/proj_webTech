
let taskformEl=document.getElementById('task-form');
let taskEl=document.getElementById('task-el');

let taskList=localStorage.getItem('tasks')?JSON.parse(localStorage.getItem('tasks')):[];

taskformEl.addEventListener('submit',function(e)
{
    e.preventDefault();
    let task=taskEl.value;
    taskList.unshift(task);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    task="";
    displayTasks();
});


function displayTasks()
{
    let eachtask='';
    taskList.forEach(function(task,i)
{
    eachtask+=`<ol class="list-group">
                    <li class="list-group-item bg-secondary"><span>${task}</span>
                        <i class="bi bi-pen-fill float-end me-4"></i>
                        <i class="bi bi-archive-fill float-end me-4" onclick="deleteTask(${i})"></i>
                    </li>
                </ol>`
});

console.log(eachtask);

document.getElementById('task-list-el').innerHTML=eachtask;
}
displayTasks();



function deleteTask(index)
{
    taskList.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(taskList));
    displayTasks();
}