//1. Props
//A. Khái niệm
// Props là một đối tượng lưu trữ các thuộc tính của một thẻ, nó được dùng với mục đích để truyền cho component các giá trị thuộc tính và là cách 
//các component giao tiếp với nhau
//B. Mục đích
// dùng để truyền dữ liệu từ components cha xuống components con
//B. Ví dụ và cú pháp
//component cha
import React from 'react';
export const Welcome = () =>{
    return(
        <div>
            <Message ms={'Xin chào'}/>
        </div>
    )
}
//component con
export const Message = (props) =>{
    return(
        <div>
            <h2>{props.ms}</h2>
        </div>
    )
}
//khi thực thi project thì chương trình sẽ in ra dùng chữ "xin chào"
//Ngoài ra props còn có thể chứa các hàm thực thi truyền như thuộc tính bình thường 

// props có thể thay đổi băng cách sử dụng setProps hoặc replaceProps nhưng không được sử dụng nhiều

//2. State

//A. Khái niệm 
//là một object có thể được sử dụng để chứa dữ liệu hoặc thông tin về components. State có thể
// được thay đổi bất cứ khi nào mong muốn. Khác với props có thể truyền props sang các components
// khác nhau thì state chỉ tồn tại trong phạm vi của components chứa nó, mỗi khi state thay đổi thì components đó sẽ được render lại

//B. Mục đích
//state được dùng để phản hồi các yêu cầu từ người dùng, hay lưu trữ một dữ liệu nào đó trong components.

//B. ví dụ và cú pháp

import { useState } from 'react';
export const DemoState = (props)=>{
    //tạo một state mới
    const [count, setCount] = useState(0)
    if(props.ms==='decre'){
        //thay đổi state
        setCount(count-1)
    }
    else(props.ms==='incre'){
        //thay đổi state
        setCount(count+1)
    }
    return( 
        <div>
            <h2>Count is: {count}</h2>
        </div>
    )
}
//component này nhận props truyền vào có thuộc tính ms nhận hai giá trị 'decre' hoặc 'incre'
// nếu props.ms === 'decre' thì giảm count đi 1 và ngược lại

//3. Tổng kết

//Sự khác biệt giữa state và props là :

//Props là một object tích hợp trong React lưu trữ giá trị của các thuộc tính của thẻ và hoạt động tương tự như các thuộc 
//tính HTML nó cho phép chúng ta giao tiếp giữa các components với nhau bằng cách truyền tham số qua lại giữa các components.

//State là một đối tượng React tích hợp được sử dụng để chứa dữ liệu hoặc thông tin về Component. State trong một component 
//có thể thay đổi và bất cứ khi nào nó thay đổi, component sẽ render lại