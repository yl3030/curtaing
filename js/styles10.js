window.onbeforeunload = function(){
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}


$(".togglebar").click(function(){
	console.log('toggle menu bar');
	memberBackMenu();
	$(".togglebar").toggleClass("click");
	$(".menu").toggleClass("active");
	$("header").toggleClass("fixed");

	$("body").toggleClass("fixed");

	$(".togglebar").toggleClass("clicko");
});

$("#header a").click(function(){
    // $("header").removeClass("fixed");
    // $("body").removeClass("fixed");
    // $(".menu").removeClass("active");
    // $(".togglebar").removeClass("clicko");
    // $(".togglebar").removeClass("click");
})

$(".togglebar").hover(function(){
    $(this).addClass("gt");
    $(this).removeClass("gb");
},function(){
    $(this).addClass("gb");
    $(this).removeClass("gt");
});

$(".btnn").click(function(){
    $(".btnn-content").slideToggle();
});


// ourmission start
var test = false;
$(window).scroll(function (event) {
    var h_num = $(window).scrollTop();
    var h_s1 = $("#header").outerHeight();
    var h_s2 = $("#banner").outerHeight();
    var h_s3 = $("#Simplicity").outerHeight();
    var h_sall = h_s1 + h_s2 + h_s3;

    if (h_num >= h_sall) {
        $('.ourmission').addClass('active');
    }else{
        $('.ourmission').removeClass('active');
    }
    event.stopPropagation();
});
// ourmission end


/*help*/
$(".hhul .hfc").find("li").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().removeClass("active");
    $(this).parent().siblings().find("li").removeClass("active");

    $(this).find(".tcontt").slideToggle();
    $(this).siblings().find(".tcontt").slideUp();
    $(this).parent().siblings().find(".tcontt").slideUp();
});


$(".range-all.help").find("h5").click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
});
$(".range-all.help").find("h5").eq(0).click(function() {
    $('html,body').animate({ scrollTop: $("#AboutUs").offset().top - 50 }, 500)
});
$(".range-all.help").find("h5").eq(1).click(function() {
    $('html,body').animate({ scrollTop: $("#HowThisWorks").offset().top - 50 }, 500)
});
$(".range-all.help").find("h5").eq(2).click(function(event) {
    $('html,body').animate({ scrollTop: $("#HowToMeasure").offset().top - 50 }, 500)
});
$(".range-all.help").find("h5").eq(3).click(function(event) {
    $('html,body').animate({ scrollTop: $("#FAQ").offset().top - 50 }, 500)
});
$(".range-all.help").find("h5").eq(4).click(function(event) {
    $('html,body').animate({ scrollTop: $("#ContactUs").offset().top - 50 }, 500)
});


/*问号*/
$(".whb-close").click(function(){
    $(".whb-content").removeClass("active");
    $(".wenhaoBox").removeClass("active");
	$("body").css("overflow","auto");
});

/*问号弹出*/
$(".w_pleat").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat").siblings().removeClass("active");
});
$(".w_liningbo").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_liningbo").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_liningbo").siblings().removeClass("active");
});
$(".w_stacking").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_stacking").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_stacking").siblings().removeClass("active");
});
$(".w_track").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_track").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_track").siblings().removeClass("active");
});
$(".w_sftrack").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_sftrack").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_sftrack").siblings().removeClass("active");
});
$(".w_brackets").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_brackets").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_brackets").siblings().removeClass("active");
});

$(".w_pleat_sf").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat_sf").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat_sf").siblings().removeClass("active");
});
$(".w_pleat_eye").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat_eye").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_pleat_eye").siblings().removeClass("active");
});
$(".w_cromanbt").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_rb").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_rb").siblings().removeClass("active");
});
$(".w_cromanb").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_cromanb").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_cromanb").siblings().removeClass("active");
});
$(".w_crollerb").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_crollerb").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_crollerb").siblings().removeClass("active");
});
$(".w_cvb").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_cvb").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_cvb").siblings().removeClass("active");
});
$(".w_rolltype").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_rolltype").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_rolltype").siblings().removeClass("active");
});
$(".w_mcs").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_mcs").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_mcs").siblings().removeClass("active");
});
$(".w_mb").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_mb").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.wc_mb").siblings().removeClass("active");
});

$(".acedit_email").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_address").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_address").siblings().removeClass("active");
});
$(".acedit_sn").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_sn").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_sn").siblings().removeClass("active");
});
$(".acedit_info").click(function(){
    $(".wenhaoBox").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_info").addClass("active");
    $(".wenhaoBox .whb-inner").find(".whb-content.ac_info").siblings().removeClass("active");
});


// my sample
$(".sample-delete").click(function(){
    $(this).parents(".pic-box").remove();
})
$(".mysample-cross").click(function(){
    $(".mysample").fadeOut(300);
    $("body").css("overflow","visible");
})
$(".num_inner-sample").click(function(){
    $(".mysample").fadeIn(300);
    $("body").css("overflow","hidden");
})

// scrolldown
$(window).on("scroll resize",function(){
    if($(window).scrollTop()>0){
        $(".header-product-main").addClass("active");
        $(".header-fixed").addClass("active");
        $("header.header-fixed .togglebar").addClass("fixed");
    }else {
        $(".header-product-main").removeClass("active");
        $(".header-fixed").removeClass("active");
        $("header.header-fixed .togglebar").removeClass("fixed");
    }
})