// tạo mới cookies
const createCookies = (name, value, expDay)=>{
    let now = new Date();
    now.setTime(now.getTime()+expDay*24*60*60*1000);
    document.cookie = name+"="+value+";expires="+now.toUTCString()+";path=/"
}

//xoá cookies bằng cách set thời gian hết hạn trong quá khứ
const deleteCookies = (name)=>{
    let now = new Date();
    now.setTime(now.getTime()-60*1000)
    document.cookie = name+"=;expires="+now.toUTCString()+";path=/"
}

//cách lấy ra cookie theo tên 
const getCookie = (name)=>{
    let cookieStr = document.cookie;
    if(cookieStr){
        let cookieArray = cookieStr.split(";")
        for(let i=0; i<cookieArray.length; i++){
            let keyValueArr = cookieArray[i].split("=");
            if(keyValueArr[0].trim() == name){
                return cookieArray[i]
            }
        }
    }

}
// tạo mới cookies
createCookies("trackingId", "48264");
createCookies("name1", "abc");
createCookies("name2", "jdskf");

//xoá cookies có tên là name2
deleteCookies("name2");

//lấy cookie theo tên
getCookie("name1")