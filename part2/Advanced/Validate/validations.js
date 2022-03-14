// có 2 kiểu xác thực
// 1. Basic Form validation
const validateFunction = ()=>{
        if( document.myForm.Name.value == "" ) {
           alert( "Please provide your name!" );
           document.myForm.Name.focus() ;
           return false;
        }
        if( document.myForm.EMail.value == "" ) {
           alert( "Please provide your Email!" );
           document.myForm.EMail.focus() ;
           return false;
        }
        if( document.myForm.Zip.value == "" || isNaN( document.myForm.Zip.value ) ||
           document.myForm.Zip.value.length != 5 ) {
           
           alert( "Please provide a zip in the format #####." );
           document.myForm.Zip.focus() ;
           return false;
        }
        if( document.myForm.Country.value == "-1" ) {
           alert( "Please provide your country!" );
           return false;
        }
        return( true );
     }
     //hàm dưới kiểm tra xem ô email người dùng đã nhập đúng định dạng email hay chưa 
     //( trong ví dụ này nếu @ nằm đầu email hoặc vị trí dấu chấm cuối cùng trừ đi vị trí của @ nhỏ hơn 2 thì email sai định dạng)
     const validateEmail = ()=>{
        var emailID = document.myForm.EMail.value;
        atpos = emailID.indexOf("@");
        dotpos = emailID.lastIndexOf(".");
        
        if (atpos < 1 || ( dotpos - atpos < 2 )) {
           alert("Please enter correct email ID")
           document.myForm.EMail.focus() ;
           return false;
        }
        return( true );
     }