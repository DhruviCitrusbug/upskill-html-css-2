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

    $("#collapse-btn").click(function () {
        let sidebar = $(".sidebar");
        let sidebarHeader = $(".sidebar-header");
        let sidebarBody = $(".sidebar-body");
        let collapseBtn = $(this);
        if (sidebar.hasClass("collapse")) {
            sidebar.removeClass("collapse");
            sidebarHeader.removeClass("collapse");
            sidebarBody.removeClass("collapse");
            collapseBtn.removeClass("collapse");
        }
        else {
            sidebar.addClass("collapse");
            sidebarHeader.addClass("collapse");
            sidebarBody.addClass("collapse");
            collapseBtn.addClass("collapse");
        }
    })
})