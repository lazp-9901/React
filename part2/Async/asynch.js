//các hàm chạy sóng song với nhau gọi là không đồng bộ
// trong ví dụ trên khi chạy callbackFunction tứ là chương trình sẽ chạy đồng thời hai hàm Display, và Calculate
const Display = (something)=>{
    console.log(something);
}

const Calculate = (num1, num2, callbackFunction)=>{
    let sum = num1 + num2;
    callbackFunction(sum);
}

Calculate(3,4,Display);
//cách khắc phục bất đồng bộ 
//chỉ định thời gian chạy hàm callback sư dụng setTimeout() hoặc setInterval()
//callback sẽ được thực thi khi hết thời gian là 1000ms
setTimeout(()=>{
    console.log('abc');
},1000)
//callback sẽ được gọi lại sau mỗi 1000ms
let a =0;
setInterval(()=>{
    console.log(++a)
},1000)
