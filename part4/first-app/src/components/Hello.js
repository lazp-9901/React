//Components giúp phân chia các UI (giao diện người dùng) thành các phân nhỏ để dễ dàng quản lý và tái sử dụng. 
//Giả sử mình có một website gồm nhiều phần bố cục khác nhau và mình muốn chia nhỏ các phần ra để dễ quản lý thì ta sẽ chia nhỏ trang web ra 
//thành các component nhỏ và gọi chúng như dùng các thẻ
//trong ví dụ này ta có 1 components nhỏ hiển thị dòng "Hello + Tên là một props sẽ dc truyền vào khi sử dụng"

//có hai loại component là Functional(Stateless) và Class(statefull)
// cả hai loại component khi đặt tên thì đều phải viết hoa
//1. Các loại component
//+ vd: Function Component
import React, {Component} from 'react'

export const Hello = (props) => {
  return (
    <div>
        <h2>Hello {props.name}</h2>
    </div>
  )
}
//+ Cú pháp
//cách viết này ta sẽ sử dụng các hàm JS và return về các element viết bằng JSX trong return())
//tất cả các element khi return đều phải đặt trong một thẻ bao ngoài tổng thể ví dụ như thẻ div
//nếu trong trong file mà có nhiều hơn 1 hàm thì trước khi viết hàm ta cần export
//+ Chú ý 
//nếu chỉ có một hàm duy nhất thì cuối cùng cần phải export default <tên hàm>
//trước khi React ra mắt phiên bản 16.8 người ta gọi Function component là statenless component vì nó khó khăn trong việc quản lí state và các hàm life-cycle
// Hiện tại có thể dùng các Hook để quản state và sử dụng các chức năng tương đương với các hàm Life-cycle

//+ vd: Class Component
export class HelloC extends Component {
  render() {
    return (
      <div>
          <h1>Welcome, This is a classComponent</h1>! 
      </div>
    )
  }
}

//+ Cú pháp
// khi viết classComponent luôn luôn phải extends React.Component
// classComponent nhận props trong hàm khởi tạo nếu cần 
// dùng method render() để trả về React Element

//+ Chú ý
// viết hàm bằng classComponent là kiểu viết đầy đủ nhất của một component
// React cung cấp đầy đủ các chức năng của một component như state, props, life-cycle
// trước khi v16.8 ra đời thì kiểu viết classComponent là kiểu viết tốt nhất khi viết component

//2. Truyền tham số cho component
// ta có thể dùng props để truyền và nhận tham số trong component
// giống như HTML các component truyền tham số giống như các truyền tham số cho các attribute
// khác HTML ở chỗ ,  component có thể nhận mọi kiểu dữ liệu mà JS cho phép còn HTML thì chỉ nhận dạng string
// khi truyền kiểu dữ liệu string cho component thì cần đặt trong dấu "..." còn các kiểu dữ liệu khác thì {...} 
// JSX attributes viết dạng camel case
//vd: truyền tham số cho Hàm NumberInput
    //  <NumberInput
    //     label="Salary"
    //     placeholder={holderText}
    //     readonly={false}
    //     decimalDigits={2}
    //  />
// khi truyền kiểu dữ liệu boolean nếu có giá trị là true thì có thể rút gọn bằng cách
{/* <NumberInput readonly />
// Cũng giống như
<NumberInput readonly={true} /> */}
//còn giá trị mà = false thì phải viết đầy dủ 

//3. Nhận tham số
//vd:
// functionComponent
// const NumberInput = (props) => {
//   console.log(props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
//   return (...);
// };

// classComponent
// class NumberInput extends React.Component {
//   render() {
//      console.log(this.props); // In ra { label: "Salary", placeholder: "Enter your salary", readonly: false, decimalDigits: 2 }
//      return (...);
//   }
// }
// có thể thấy props ở dạng các cặp key-value nên khi muốn sử dụng một props cụ thể nào đó thì viết dạng props.<thuộc tính muốn sử dụng>
// các props sẽ đươc truyền vào khi người dùng gọi hàm và sử dụng

//4. Default Props
//vd : 
// function NumberInput(props) {
//   const { placeholder: holder, readonly=false } = props;
//   return (
//      <input placeholder={holder} readonly={readonly} />
//   );
// }
// NumberInput.defaultProps = {
//   readonly: false,
//   decimalDigits: 4
// }
// khi props được gán giá trị default thì lúc sử dụng nếu mà không truyền các tham số thì props sẽ mặc định theo default đẫ định ngĩa

//Chú ý : không thể gán đè các giác trị của props trong component 
// ví dụ trường hợp sau sẽ gây lỗi
// function NumberInput(props) {
//   props.readonly = true;
//   return (...   );
// }