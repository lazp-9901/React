//A .Một ngôn ngữ lập trình có thể được gọi là ngôn ngữ lập trình hướng đối tượng nếu nó có :
//1. tính đóng gói : nó có thể lưu trữ các thông tin liên quan dù là dữ liệu hay hàm trong cùng một đối tượng
//2.tính tổng hợp : khả năng lưu trữ một đối tượng bên trong đối tượng khác 
//3.tính kế thừa : khả năng sử dụng biến hoặc phương thức của một hay nhiều lớp của một lớp
//4.tính đa hình : khả năng viết một hàm hoặc một phương thức hoạt động theo nhiều cách khác nhau

//B .Thuộc tính đối tượng
//thuộc tính đối tượng thường là các biến cục bộ sử dụng trong đối tượng hoặc các biến toàn cục được sử dụng trên toàn bộ trang
//vd : thêm thuộc tính vào một đối tượng : objectName.objectProperty = propertyValue;
//vd : lấy tile của tài liệu : 
// const str = document.title;

//C. Phương thức của đối tượng
//Phương thức là các hàm cho phép đối tượng thực hiện một mục đích nào đó. Giữa hàm và phương thức có khác biệt nhỏ là hàm là một đơn vị câu lệnh độc lập
// và một phương thức được gắn với một đối tượng và có thể được tham chiếu bởi từ khoá this
//Các phương thức hữu ích trong nhiều trường hợp từ in nội dung của đối tượng ra màn hình đến thực hiện các phép tính phức tạp giữa các thuộc tính cục bộ
//vd : sử dụng phương thức write để viết nội dung
// document.write('this is content')

//D .Đối tượng do người dùng định nghĩa
//Phương thức new để tạo mới các kiểu dữ liệu cho biến 
const employee = new Object();
const books = new Array("C++", "Perl", "java");
const day = new Date("August 15, 1947");
//Phương thức object() để tạo đối tượng mới 
const bookNovel = new Object();
bookNovel.topic = 'dhs'
bookNovel.author = 'John'

console.log(bookNovel);
//sử dụng method trong đối tượng
function addPrice(amount){
    this.price = amount;
}
function book(title, author){
    this.title = title
    this.author = author
    this.addPrice = addPrice
}
let myBook = new book('abc', 'alex')
myBook.addPrice(200)

console.log(myBook.title);
console.log(myBook.author);
console.log(myBook.price);