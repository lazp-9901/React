//Toán tử số học
const Arithmetic_Ope = ()=>{
    let a = 6
    let b = 10
    console.log('a b :', 6, 10);
    console.log('a+b =',a+b)
    console.log('a-b =',a-b)
    console.log('a*b =',a*b)
    console.log('a/b =',a/b)
    console.log('a%b =',a%b)
    console.log('++b =',++b)
    console.log('--b =',--b)
}
Arithmetic_Ope();
const Comparison_Ope = ()=>{
    let a = 6
    let b = 10
    console.log('a b :', 6, 10);
    console.log('a>b ',a>b)
    console.log('a<b ',a<b)
    console.log('a>=b ',a>=b)
    console.log('a<=b ',a<=b)
    console.log('a==b ',a==b)
    console.log('a!=b ',a!=b)
}
Comparison_Ope();
const Logical_Ope = ()=>{
    let a = true
    let b = false
    console.log('a b', a,b)
    console.log('a&&b', a&&b)
    console.log('a||b', a||b)
    console.log('!(a&&b)', !(a&&b))
}
Logical_Ope();
const Bitwise_Ope = ()=>{
    let a = 2;
    let b = 3;
    console.log('a b', a,b)
    //and 010*110
    console.log('a&b', a&b)
    //or 010+110
    console.log('a|b', a|b)
    //xor nếu cặp bit giống nhau trả về 0 và ngược lại
    console.log('a^b', a^b)
    //not bit 0 thành 1 và ngược lại
    console.log('~b', ~b)
    //left shift a dịch sang trái b bit
    console.log('a<<b', a<<b)
    //right shift a dịch sang phải b bit
    console.log('a>>b', a>>b)
}
Bitwise_Ope();
const Assignment_Ope = ()=>{
    let a = 20
    let b = 10
    console.log('a b', a,b)
    console.log('a=b', a=b)
    console.log('a+=b', a+=b)
    console.log('a-=b', a-=b)
    console.log('a*=b', a*=b)
    console.log('a/=b', a/=b)
    console.log('a%=b', a%=b)
}
Assignment_Ope();
const Miscellaneous_Ope = ()=>{
    let a = 10
    let b = 12
    let c = 'abc'
    console.log('a b c', a,b,c)
    let Conditional_Ope = ()=>{a==b?console.log('a=b'):console.log('a!b')}
    Conditional_Ope();
    console.log('type of a:', typeof(a))
    console.log('type of b:', typeof(c))
}
Miscellaneous_Ope();