
let a = 3

const loopControl_break = ()=>{
    for(let i = 0; i<10; i++){
        if(i==a){
            break;
        }
        else{
            console.log(i);
        }
    }
}

const loopControl_continue = ()=>{
    for(let i = 0; i<10; i++){
        if(i==a){
            continue;
        }
        else{
            console.log(i);
        }
    }
}

const loopControl_usingLableWithBreak = ()=>{
    outerloop:
        for(let i=0; i<5; i++){
            console.log('outerloop:',i);
            innerloop:
                for(let j=0; j<5; j++){
                    if(j>3)
                        break;
                    if(i==2) break innerloop;
                    if(i==4) break outerloop;
                    console.log('innerloop:',j);
                }
        }
}

const loopControl_usingLableWithContinue = ()=>{
    outerloop:
        for(let i=0; i<5; i++){
            console.log('outerloop:',i);
            for(let j=0; j<5; j++){
                if(j==3) {
                    continue outerloop
                }
                console.log('innerloop:',j);
            }
        }
}

console.log('loopControl_break');
loopControl_break();
console.log('loopControl_continue');
loopControl_continue();
console.log('loopControl_usingLableWithContinue');
loopControl_usingLableWithContinue();
console.log('loopControl_usingLableWithBreak');
loopControl_usingLableWithBreak();