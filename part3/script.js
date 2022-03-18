const inputValue = document.getElementById("ip_task");


const showTaskList = () =>{
    let taskShowList = document.querySelector(".allTasks")
    let output = ''
    let localItem = JSON.parse(localStorage.getItem('localItem'))
    localItem === null?taskList=[]:taskList=localItem
    taskList.forEach((data, index)=>{
        output += `<div class="Task" id="${index}">
        <h3>
            <div><input type="checkbox" class="ip_checkbox"> ${data}</div>
            <div>
                <button onclick="deleteTaskHandler(${index})"><i class="fas fa-trash"></i></button>
                <button onclick="updateTaskHandler(${index})"><i class="fas fa-edit"></i></button>
            </div>
        </h3>
    </div>`
    })
    taskShowList.innerHTML = output
}

showTaskList();

const addTaskHandle = () =>{
    let localItem =JSON.parse(localStorage.getItem('localItem'))
    localItem === null?taskList=[]:taskList=localItem
    taskList.push(inputValue.value)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showTaskList();
} 

const deleteTaskHandler = (id)=>{
    let localItem =JSON.parse(localStorage.getItem('localItem'))
    taskList.splice(id,1)
    localStorage.setItem('localItem', JSON.stringify(taskList))
    showTaskList();
}

const updateTaskHandler = (id)=>{
    taskList = JSON.parse(localStorage.getItem('localItem'))
    let Value = prompt('Your update', 'input here')
    taskList[id] = `${Value}`
    localStorage.setItem('localItem',JSON.stringify(taskList))
    showTaskList();
}