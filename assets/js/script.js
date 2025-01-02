$(document).ready(function () {
    console.log("ready");
    $("#profile-button").click(function () {
        let profilePopup = $(this).parent().find(".profile-popup");
        console.log("clicked");
        if (profilePopup.css("display") == "none") {
            profilePopup.slideDown(300);
        }
        else {
            profilePopup.slideUp(300);
        }
    })
})