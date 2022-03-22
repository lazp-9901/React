//Components giúp phân chia các UI (giao diện người dùng) thành các phân nhỏ để dễ dàng quản lý và tái sử dụng. 
//Giả sử mình có một website gồm nhiều phần bố cục khác nhau và mình muốn chia nhỏ các phần ra để dễ quản lý thì ta sẽ chia nhỏ trang web ra 
//thành các component nhỏ và gọi chúng như dùng các thẻ
//trong ví dụ này ta có 1 components nhỏ hiển thị dòng "This is a component"
import React from 'react'

const Hello = (props) => {
  return (
    <div>
        <h2>Hello {props.name}</h2>
    </div>
  )
}

export default Hello