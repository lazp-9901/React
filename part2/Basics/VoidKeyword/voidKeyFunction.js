const voidKeyAlert = () =>{
    javascript:void(alert('warning'))
}
//tạo giá trị undefined 
//void xử dụng như toán tử một ngôi, nó được dùng phổ biến trong việc tạo giá trị undefined nguyên thuỷ hoặc dùng trong các hàm không trả về
const voidKeyUndefined = () =>{
    let a,b,c ;
    a = void(b=5, c=7)
    alert('a='+a+ ' b='+b+ ' c='+c)
}