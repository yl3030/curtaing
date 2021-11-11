/*if(/Android|iphone|ipad|webOS/i.test(navigator.userAgent)){
    $(".hhi .h-inner").css({
        "width": "10000px",
    })

    $(".common.Reviews .h-inner").outerWidth($(".common.Reviews .h-inner .hicont").length * $(".common.Reviews .h-inner .hicont").eq(0).outerWidth(true));
    

}*/
/*else{
    var strLast = $(".hhi .h-inner .hicont:gt(2)").clone();
    var strFirst = $(".hhi .h-inner .hicont:lt(4)").clone();
    $(".hhi .h-inner").append(strFirst);
    $(".hhi .h-inner").prepend(strLast);
    $(".hhi .h-inner").css({
        "width": "10000px",
        "left": "-1320px"
    })
    $(".btn-next").click(function() {
        $(".hhi .h-inner").animate({
            left: "-=440"
        }, function() {
            if (parseInt($(".hhi .h-inner").css("left")) == -4400) {
                $(".hhi .h-inner").css("left", "-1320px");
            }
        })
    });
    $(".btn-prev").click(function() {
        $(".hhi .h-inner").animate({
            left: "+=440"
        }, function() {
            if (parseInt($(".hhi .h-inner").css("left")) == 0) {
                $(".hhi .h-inner").css("left", "-2640px");
            }
        })
    });
}*/