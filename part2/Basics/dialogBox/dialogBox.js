

//hộp cảnh báo
const warnBox = ()=>{
    alert('Warning')
}
//hộp xác nhận
const confirmBox = ()=>{
    let confirmValue = confirm("are you sure?")
    if(confirmValue){
        document.write("sure")
        return true
    }
    else{
        document.write("not sure")
        return false
    }
}
//hộp nhắc 
const promptBox = ()=>{
    let promptValue = prompt("Enter your age", "input here")
    document.write("your age: "+ promptValue)
}