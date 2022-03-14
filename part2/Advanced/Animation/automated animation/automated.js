var animated
var object = null
const autoMoveToRight = ()=>{
    object = document.getElementById("test_block")
    object.style.left = parseInt(object.style.left)+10+'px'
    animated = setTimeout(autoMoveToRight, 1000); // cứ 20ms tự động gọi hàm autoMoveToRight
}
const stop = ()=>{
    clearTimeout(animated)
    object.style.left = '0px'
}