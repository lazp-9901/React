const inputValue = document.getElementById("ip_task");

//1.LocalStorage


// const showTaskList = () =>{
//     let taskShowList = document.querySelector(".allTasks")
//     let output = ''
//     let localItem = JSON.parse(localStorage.getItem('localItem'))
//     localItem === null?taskList=[]:taskList=localItem
//     taskList.forEach((data, index)=>{
//         output += `<div class="Task" id="${index}">
//         <h3>
//             <div><input type="checkbox" class="ip_checkbox"> ${data}</div>
//             <div>
//                 <button onclick="deleteTaskHandler(${index})"><i class="fas fa-trash"></i></button>
//                 <button onclick="updateTaskHandler(${index})"><i class="fas fa-edit"></i></button>
//             </div>
//         </h3>
//     </div>`
//     })
//     taskShowList.innerHTML = output
// }

// showTaskList();

// const addTaskHandle = () =>{
//     let localItem =JSON.parse(localStorage.getItem('localItem'))
//     localItem === null?taskList=[]:taskList=localItem
//     taskList.push(inputValue.value)
//     localStorage.setItem('localItem', JSON.stringify(taskList))
//     showTaskList();
// } 

// const deleteTaskHandler = (id)=>{
//     let localItem =JSON.parse(localStorage.getItem('localItem'))
//     taskList.splice(id,1)
//     localStorage.setItem('localItem', JSON.stringify(taskList))
//     showTaskList();
// }

// const updateTaskHandler = (id)=>{
//     taskList = JSON.parse(localStorage.getItem('localItem'))
//     let Value = prompt('Your update', 'input here')
//     taskList[id] = `${Value}`
//     localStorage.setItem('localItem',JSON.stringify(taskList))
//     showTaskList();
// }

//2.sessionStorage


// const showTaskList = () =>{
//     let taskShowList = document.querySelector(".allTasks")
//     let output = ''
//     let sessionItem = JSON.parse(sessionStorage.getItem('sessionItem'))
//     sessionItem === null?taskList=[]:taskList=sessionItem
//     taskList.forEach((data, index)=>{
//         output += `<div class="Task" id="${index}">
//         <h3>
//             <div><input type="checkbox" class="ip_checkbox"> ${data}</div>
//             <div>
//                 <button onclick="deleteTaskHandler(${index})"><i class="fas fa-trash"></i></button>
//                 <button onclick="updateTaskHandler(${index})"><i class="fas fa-edit"></i></button>
//             </div>
//         </h3>
//     </div>`
//     })
//     taskShowList.innerHTML = output
// }

// showTaskList();

// const addTaskHandle = () =>{
//     let sessionItem =JSON.parse(sessionStorage.getItem('sessionItem'))
//     sessionItem === null?taskList=[]:taskList=sessionItem
//     taskList.push(inputValue.value)
//     sessionStorage.setItem('sessionItem', JSON.stringify(taskList))
//     showTaskList();
// } 

// const deleteTaskHandler = (id)=>{
//     let sessionItem =JSON.parse(sessionStorage.getItem('sessionItem'))
//     taskList.splice(id,1)
//     sessionStorage.setItem('sessionItem', JSON.stringify(taskList))
//     showTaskList();
// }

// const updateTaskHandler = (id)=>{
//     taskList = JSON.parse(sessionStorage.getItem('sessionItem'))
//     let Value = prompt('Your update', 'input here')
//     taskList[id] = `${Value}`
//     sessionStorage.setItem('sessionItem',JSON.stringify(taskList))
//     showTaskList();
// }
//Về cơ bản sessionStorage và localStorage tương đối giống nhau , khác là sessionStorage không có khả năng lưu trữ vĩnh viến như 
//localStorage và khả năng lưu trữ của sessionStorage ít hơn localStorage


//3.Cookie

//khác với sessionStorage và localStorage thì cookie có thể được access bởi cả phía client và server
//chủ yếu cookie được dùng trong duy trì đăng nhập hoặc ghi nhớ trạng thái trang web
//cookie có thời hạn được chỉ định trong trường expires

const showTaskList = () =>{
    let taskShowList = document.querySelector(".allTasks")
    let output = ''
    let cookieItem = document.cookie
    if(cookieItem===''){
        taskShowList.innerHTML = "Không có việc làm"
    }
    else{
            cookieItem = cookieItem.split(';')
            for(let i=0; i<cookieItem.length; i++){
                cookieItem[i] = cookieItem[i].split("=")[1]
            }
            cookieItem.forEach((data, index)=>{
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
}

showTaskList();

const addTaskHandle = () =>{
    let ipValue = document.getElementById('ip_task')
    document.cookie = `${ipValue.value}=${ipValue.value}`
    showTaskList();
} 

const deleteTaskHandler = (id)=>{
    let cookieItem = document.cookie
    let now = new Date()
    cookieItem = cookieItem.split(';')
    for(let i=0; i<cookieItem.length; i++){
        cookieItem[i] = cookieItem[i].split("=")[1]
    } 
    document.cookie = `${cookieItem[id]}=${cookieItem[id]};expires=${now.toUTCString()}`
    showTaskList();
}

const updateTaskHandler = (id)=>{
    deleteTaskHandler(id)
    let Value = prompt('Your update', 'input here')
    document.cookie = `${Value}=${Value}`
    showTaskList();
}