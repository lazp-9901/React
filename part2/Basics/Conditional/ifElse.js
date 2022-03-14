let a = 10
let b = 20
let c = 'abc'
//if 
const ifStatement=()=>{
    if(a<b){
        console.log('a nhỏ hơn b');
    }
}
//if else
const ifElseStatement=()=>{
    if(a>b){
        console.log('a lớn hơn b');
    }
    else{
        console.log('b lớn hơn a');
    }
}
//if elseIf else
const ifElseIfStatement = ()=>{
    if(typeof(a)==typeof(c) && typeof(b)==typeof(a)){
        console.log('a, b và c cùng kiểu dữ liệu');
    }
    else if(typeof(a)!=typeof(c) && typeof(b)==typeof(a)){
        console.log('chỉ a và b cùng kiểu dữ liệu');
    }
    else if(typeof(a)==typeof(c) && typeof(b)!=typeof(a)){
        console.log('chỉ a và c cùng kiểu dữ liệu');
    }
    else if(typeof(b)==typeof(c) && typeof(b)!=typeof(a)){
        console.log('chỉ b và c cùng kiểu dữ liệu');
    }
    else{
        console.log('a, b và c khác kiểu dữ liệu');
    }
}

ifStatement();
ifElseStatement();
ifElseIfStatement();