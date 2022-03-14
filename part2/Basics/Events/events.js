//khi click vào button onClick thì hàm onClickTest này sẽ được thực thi
const onClickTest = ()=>{
    alert('Demo onClick')
}
//khi click vào button onSubmit thì hàm onSubmit này sẽ kiểm tra form , nếu đúng dạng thì hàm trả về false, action của form sẽ không được thực thi và ngược lại
const onSubmitTest = ()=>{
    r = /^[a-zA-Z]+@[a-zA-Z]+(.[a-zA-Z]{1,2})+$/
    if(r.test(document.f.txtEmail.value)==false){
        alert('sai định dạng')
        return false;
    }
}
//Hàm onmouseoverTest sẽ chạy khi chuột di chuyển vào đối tượng chứa event onmouseoverTest hoặc các con của nó
//Hàm onmouseoutTest sẽ chạy khi ta di chuột ra khỏi đối tượng chứa event onmouseoutTest
const onmouseoverTest = (object)=>{
    object.style.background = 'red';
}
const onmouseoutTest = (object)=>{
    object.style.background = 'yellow';
}
//Ngoài các sự kiện trên trong HTML5 có rất nhiều sự kiện khác như :
//ondblclick kích hoạt khi nháy đúp chuột vào đối tượng chứa event
//onerror kích hoạt khi có một lỗi xảy ra
//oncontextmenu sự kiện xảy ra khi người dùng ấn chuột phải để mở menu
// ondragstart: Sự kiện xảy ra khi người dùng bắt đầu kéo một phần tử
// ondrag: Sự kiện nào xảy ra khi một phần tử bị kéo
// ondragend: Sự kiện xảy ra khi người dùng hoàn thành kéo một phần tử
// ondragenter: Sự kiện xảy ra khi phần tử được kéo vào mục tiêu
// ondragover: Sự kiện xảy ra khi phần tử bị kéo lên trên mục tiêu thả
// ondragleave: Sự kiện xảy ra khi phần tử bị kéo rời khỏi mục tiêu thả
// ondrop: Sự kiện xảy ra khi phần tử bị kéo được thả vào mục tiêu thả ...vv