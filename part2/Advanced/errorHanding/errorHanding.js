//Lỗi cú pháp : còn gọi là Parsing error, lỗi xảy ra khi viết sai các quy tắc mà ngôn ngữ đề ra 
//Lỗi thời gian chạy (Runtime Error): còn gọi là exceptions lỗi xảy ra tỏng quá trình thực thi : ví dụ window.printme() trong ví dụ này lỗi xảy ra khi gọi hàm không tồn tại printme
//Lỗi Logic: xảy ra khi viết sai logic trong các chương trình
//Try...catch...finally cấu trúc này có thể bắt được được các lỗi do Lập trình viên tạo ra và các runtime exceptions nhưng không thể 
//bắt được các lỗi cú pháp
//vd:
const tryCatchFunction = () =>{
    let a
    try{
        console.log('Value of variable a is : '+ a)
    }
    catch(e){
        console.log(e.description);
    }
    finally{
        console.log('end');
    }
}
tryCatchFunction();
//chạy khối lệnh trong câu try nếu có lỗi thì khối lệnh trong catch chạy , cuôi cùng khối lệnh trong finally luôn chjay dù khối try có bắn ra lỗi hay không
