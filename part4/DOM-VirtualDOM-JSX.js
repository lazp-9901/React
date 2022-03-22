
//1.DOM
// DOM là viết tắt của Document Object Model
//Khi trình duyệt tải một trang web , trình duyệt sẽ nhận được chuỗi HTML dựa trên tiêu chuẩn W3C nó sẽ dựng được mô hình DOM(dạng cây)
// DOM có 3 thành phần
//+ Element vd: các thẻ h, html, body, img...
//+ Attribute vd: các thuộc tinh của các thẻ src, id, class ...
//+ Text vd: các đoạn văn bản hiển thị
// Dựa vào DOM , sử dụng Javascript có thể truy cập, thêm, lấy giá trị, xoá và sửa đổi tất cả các phần tử trên trang web(Element, Attribute, Text)
//Có 5 loại VirtualDOM chính
//ReactElement 
//ReactElement Factory
//ReactNode
//ReactComponent 
//ReactComponent Class


//2.Virtual DOM
//Do độ lớn của các dự án việc thao tác với DOM sẽ trở lên rất khó khăn
//Virtual DOM sinh ra để giải quyết vấn đề trên, Nó được xây dựng như một lớp nằm trên DOM, hệ thống các sự kiện sẽ thao tác với Virtual DOM thay vì tác động trực tiếp trên DOM
// VirtualDOM sử dụng các thuật toán để kiểm tra các sự thay đổi và re-render lại các phần bị thay đổi thôi , không cần render lai; toàn bộ DOM


//3.JSX
//+ Khái niệm
//JSX = Javascript+XML 
//nó chuyển đổi cú pháp dạng XML về dạng JavaScript hay nói cách khác JSX sinh ra để viết các thành phần xây dựng trang web (giống như HTML) trong Javascript

//+ Cú pháp
// <JSXElementName JSXAttributesopt>...</JSXElementName> hoặc dạng <JSXElementName JSXAttributes/>
// phải chú ý Attribute của JSX có khác biệt so với HTML vd: classname thay vì class hoặc htmlfor thay vì for trong thẻ label

//+ Tại sao nên dùng JSX
//JSX với cú pháp gần giống XML, cấu trúc cây khi biểu thị các attributes, điều đó giúp ta dễ dàng định nghĩa, quản lý được các component phức tạp, thay vì việc phải định nghĩa và gọi ra nhiều hàm hoặc object trong javascript
//JSX không làm thay đổi ngữ nghĩa của Javascript
//với cách viết gần với các thẻ HTML, nó giúp những developers thông thường (ví dụ như các designer) có thể hiểu được một cách dễ dàng, từ đó có thể viết hoặc sửa code mà không gặp nhiều khó khăn

//+ Nhúng biểu thức trong JSX
//có thể nhúng bất kỳ biểu thức JavaScript nào trong JSX bằng cách đóng nó trong dấu ngoặc nhọn
//vd: 

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

const user = {
firstName: 'Harper',
lastName: 'Perez'
};

const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );

//+ JSX cũng là một biểu thức
//Sau khi biên dịch, biểu thức JSX trở thành các đối tượng JavaScript thông thường. Điều này có nghĩa là bạn có thể sử dụng JSX bên 
//trong các câu lệnh if và cho các vòng lặp, gán nó cho các biến, chấp nhận nó như các đối số, và trả về nó từ các hàm:

//vd: dùng JSX để là đầu ra của 1 hàm jS

function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
  }

//+ Thuộc tính chỉ định với JSX
//có thể sử dụng dấu ngoặc kép để xác định chuỗi literals như các thuộc tính:
//vd: 
const el = <div tabIndex="0"></div>
//cũng có thể sử dụng dấu ngoặc nhọn để nhúng một biểu thức JavaScript trong một thuộc tính
const el1 = <img src={user.avatarUrl}></img>;

//+ Chỉ định children với JSX
//nếu thẻ trống thì có thể đóng ngay bằng /> giống XML
//nếu thẻ chứa các thẻ con 
//vd: 
const el2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you here.</h2>
    </div>
  );