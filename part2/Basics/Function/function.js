//1. định nghĩa hàm 
//cơ bản:
//function functionName(list param){statement}
function vd1(...param){
    console.log('độ dài tham số trong vd1',param.length);
}
// hoặc nếu không có tham số function vd1(){statement}
//hàm không tên
//const nanevar = function(list param){statement}
const vd2 = function(...param){
    console.log('độ dài tham số trong vd2',param.length);
}
// hoặc nếu không có tham số const vd2 = function(){statement}
//arrow function
//const namevar = (list param)=>{statement}
const vd3 = (...param)=>{
    console.log('độ dài tham số trong vd3',param.length);
}
// hoặc nếu không có tham số const vd3 = ()=>{statement}


//2. gọi hàm để sử dụng
vd1();
vd2(3);
vd3(3,4,7);


//3. Tham số trong hàm 
//như đã viết ở phần 1 
// trường hợp số tham số là cố định thì truyền các tên tham số trong ngoặc tròn
//trường hợp tham số mặc định
console.log('Tham số mặc định');
const vd4=(tuoi, gioitinh = 'nam')=>{
    console.log('bạn đó có giới tính:', gioitinh);
    console.log('bạn đó', tuoi, 'tuổi' );
}
//sử dụng tham số giới tính mặc định là nam
vd4(30);
//không sử dụng tham số giới tính mặc định
vd4(30, 'nữ')
//phạm vi của tham số là block scope (sử dụng trong hàm chứ tham số đó)

//4. Hàm có trả về và hàm không trả về
//hàm có trả về sử dụng từ khoá return
const vd5 = (a,b)=>{
    return a+b
}
//hàm không trả về không sử dụng từ khoá return
const vd6 = ()=>{
    console.log(vd5(4,5))
}

console.log('Hàm trả về và không trả về');
vd5(3,4);
vd6(4,5);