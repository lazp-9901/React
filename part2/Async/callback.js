//là cơ chế gọi lại hàm đã định nghĩa

const Display = (something)=>{
    console.log(something);
}

const Calculate = (num1, num2, callbackFunction)=>{
    let sum = num1 + num2;
    callbackFunction(sum);
}

Calculate(3,4,Display);