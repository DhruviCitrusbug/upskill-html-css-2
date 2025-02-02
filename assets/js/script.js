$(document).ready(function () {
    console.log("ready");

    function handleSidebarCollapse() {
        let sidebar = $(".sidebar");
        let sidebarHeader = $(".sidebar-header");
        let sidebarBody = $(".sidebar-body");
        let collapseBtn = $("#collapse-btn");
    
        if ($(window).width() <= 766) {
            sidebar.addClass("collapse");
            sidebarHeader.addClass("collapse");
            sidebarBody.addClass("collapse");
            collapseBtn.addClass("collapse");
        } else {
            sidebar.removeClass("collapse");
            sidebarHeader.removeClass("collapse");
            sidebarBody.removeClass("collapse");
            collapseBtn.removeClass("collapse");
        }
    }

    function handleHamburgerCollapse() {
        let sidebar = $(".sidebar");
        let sidebarHeader = $(".sidebar-header");
        let sidebarBody = $(".sidebar-body");
        let collapseBtn = $("#collapse-btn");
        sidebar.removeClass("mobile");
        if ($(window).width() <= 576) {
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
        }
    }

    handleSidebarCollapse();
    handleHamburgerCollapse();

    $(window).resize(function () {
        handleSidebarCollapse();
        handleHamburgerCollapse();
    });

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

    $("#navbar-hamburger").click(function () {
        console.log("Hamburger clicked!"); // Debugging
    
        let sidebar = $(".sidebar");
        let sidebarBody = $(".sidebar-body");
    
        sidebar.addClass("mobile");
        sidebarBody.addClass("mobile");

    });
    

    $("#sidebar-hamburger").click(function () {
        let sidebar = $(".sidebar");
        sidebar.removeClass("mobile");
    })
    
})