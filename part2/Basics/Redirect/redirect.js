//chuyển hướng ngay
const redirect_1 = ()=>{
    window.location="./redirectPage2.html"
}
//chuyển hướng sau một khoảng thời gian
const redirect_2 = ()=>{
    alert("Chờ 10s")
    setTimeout(()=>window.location="./redirectPage2.html", 10000)
}
//chuyển hướng theo trình duyệt
const redirect_3 = ()=>{
    let browserName = Navigator.appName
    if(browserName=='chrome'){
        window.location = "./redirectPage2.html"
    }
    else if(browserName=="NetSacpe"){
        window.location = "./redirectPage3.html"
    }
    else{
        window.location = "./redirectPage3.html"
    }

}