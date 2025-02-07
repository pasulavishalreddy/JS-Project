const taskForm=document.getElementById("taskForm");
const taskList=document.getElementById("taskList");

function format(date,hours,minutes,seconds) {
    return`${String(date).padStart(2,'0')}:${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;
}

function updateTaskTimer(taskItem,endTime) {
    const timerElement=taskItem.queryselector('.time');
    const now =new Date();
    const timeLeft=endTime-now;

    if(timeLeft<=0){
        timerElement.textContent='00:00:00';
        clearInterval(taskItem.timeInterval);
        taskItem.classList.add('list-group-item-danger');
        alert(`Task"${taskItem.dataset.taskName}"is complete!`)
        return;
    }

    const date=Math.floor((timeleft / (1000 * 60 * 60 *24)));
    const hours=Math.floor((timeLeft / (1000 * 60 * 60) % 24));
    const minutes=Math.floor((timeLeft / (1000 * 60 ) % 60));
    const seconds=Math.floor((timeLeft / (1000 ) % 60));

    timerElement.textContent = formatTime(date,hours,minutes,seconds);

}

function addTask(taskName,date,hours,minutes,seconds){
    const taskItem=document.createElement("li");
    taskItem.className='list-group-item d-flex justify-content-between align-items-center task';
    taskItem.dataset.taskName = taskName;

    const endTime=new Date();
    endTime.setDate(endTime.getDate()+parseInt(date));
    endTime.setHours(endTime.getHours()+parseInt(hours));
    endTime.setMinutes(endTime.getMinutes()+parseInt(minutes));
    endTime.setSeconds(endTime.getSeconds()+parseInt(seconds));

    taskItem.innerHTML=
    `<div>
    <strong>${taskName}<strong>
    <div class="time">${format(date,hours,minutes,seconds)}</div>
    </div>
    <div>
        <button class="btn btn-sm btn-success me-2 edit-task">Edit</button>
        <button class="btn btn-sm btn-danger  me-2 delete-task">Delete</button>
        <button class="btn btn-sm btn-primary me-2 reset-task">Reset</button>
    </div>`;

    taskList.appendChild(taskItem);

    taskItem.timeInterval=setInterval(()=> updateTAskTimer (taskItem,endTime), 1000);

    taskItem.querySelector(`.delete-task`).addEventListener('click',()=>{
        clearInterval(taskItem.timeInterval);
        taskList.removeChild(taskItem);
    });

    taskItem.querySelector('.edit-task').addEventListener('click',()=>{
        clearInterval(taskItem.timeInterval);
        const currentTime=taskItem.querySelector('.time').textContent.split(':');
        document.getElementById('taskName').value = taskName;
        // document.getElementById('day').value = currentTime[0];
        document.getElementById('hours').value = currentTime[0];
        document.getElementById('minutes').value = currentTime[1];
        document.getElementById('seconds').value = currentTime[2];
        taskList.removeChild(taskItem);
    });
}        
    taskForm.addEventListener('submit',(event)=>{
        event.preventDefault();

        const taskName = document.getElementById('taskName').value;
        const hours = document.getElementById('hours').value;
        const minutes = document.getElementById('minutes').value;
        const seconds = document.getElementById('seconds').value;

        addTask(taskName,hours,minutes,seconds)

        taskForm.requestFullscreen()
    });


