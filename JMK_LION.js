function changePic() {
    var state = check_img.getAttribute("src");
    if(state == "JMK_LION_img/icon_check.png"){
        check_img.src = "JMK_LION_img/icon_check_empty.png";
    }else{
        check_img.src = "JMK_LION_img/icon_check.png";
    }
}