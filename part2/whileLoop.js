
let count = 0;
const whileLoop = ()=>{
    
    console.log('white start');
    while (count < 5){
        console.log('count:', count);
        count++;
    }
    console.log('white stop');
}

const doWhileLoop = ()=>{

    console.log('dowhite start');
    do{
        console.log('count:', count);
        count++;
    }
    while (count<10)
    console.log('dowhite stop');
}
whileLoop();
doWhileLoop();