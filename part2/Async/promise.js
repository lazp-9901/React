//Promise chủ yếu được dùng trong xử lý api
const Display = (something)=>{
    log(something);
}
//một promise sẽ trả về 1 trong hai giá trị của resolve hoặc reject
let myPromise = new Promise((resolve, reject) =>{
    let x =0;
    (x==0)?resolve('ok'): reject('error')
})
// nếu promise trả về resolve khối lệnh trong then sẽ chạy
// nếu promise trả về reject khối lệnh trong catch sẽ chạy
myPromise.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log(error);
})
