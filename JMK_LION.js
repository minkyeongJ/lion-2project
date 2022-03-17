var check_img = document.querySelector("#check_img"); //check_img 요소를 가져옴
check_img.onclick = changePic; // check_id를 클릭하면 changePic 함수를 실행

function changePic() {
    var state = check_img.getAttribute("src");
    if(state == "LDH_LION_img/icon_check.png"){
        check_img.src = "LDH_LION_img/icon_check_empty.png";
    }else{
        check_img.src = "LDH_LION_img/icon_check.png";
    }
}