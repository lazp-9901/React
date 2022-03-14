let a = true;

const switchCase=()=>{
    switch(typeof(a)){
        case 'string' :
            console.log('typeof a : string');
            break;
        case 'number':
            console.log('typeof a : number');
            break;
        case 'boolean':
            console.log('typeof a : boolean');
            break;
        case 'null':
            console.log('typeof a : null');
            break;
        case 'object':
            console.log('typeof a : object');
            break;
        default:
            console.log('typeof a : undefined')
    }
    
}

switchCase();
//nếu không có break ở mỗi case thì các khối lệnh trong các case và default đều sẽ được thực thi