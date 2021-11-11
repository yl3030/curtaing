/* 产品列表 header */
var test = false;
$(window).scroll(function (event) {
    var h_num = $(window).scrollTop();
    var h_s1 = $("#header").outerHeight();

    if (h_num >= h_s1) {
        $('.range-all').addClass('fixed');
        $('header.hpro .togglebar').addClass('fixed');
        
    }else{
        $('.range-all').removeClass('fixed');
        $('header.hpro .togglebar').removeClass('fixed');
    }
    event.stopPropagation();
});



/* 产品列表 字母*/
$(".range").find("li").click(function(event) {
	var index=$(".range li").index(this);

	$(this).toggleClass('active');
	$(this).siblings().removeClass('active');

	if(/Android|iphone|ipad|webOS/i.test(navigator.userAgent)){
		$('html,body').animate({ scrollTop: $(".content-all .content").eq(index).offset().top - 59 }, 500)
	}else{
		$('html,body').animate({ scrollTop: $(".content-all .content").eq(index).offset().top - 39 }, 500)
	}

});


/* 产品 详情页 */
$(".s-img").find("li").click(function() {
	var index=$(".s-img li").index(this);
	
	// 程式增加
	current_productid = $(this).attr('data-id');
	var p_price = $(this).attr('data-price');
	$('.productprice').html(p_price);
	var p_unit = $(this).attr('data-unit');
	$('.productunit').html(p_unit);
	var p_saleable = $(this).attr('data-saleable');
	if (p_saleable == '0') $('.btn-add').hide();
	try {calcPrice();}
	catch (e) {}
	// 程式增加
	
	if ($(".content-all .content").eq(index).hasClass('active')) {
		$(".content-all .content").eq(index).addClass('active');
		$(".content-all .content").eq(index).siblings().removeClass('active');
		$(".content-all .content").eq(index).find(".cc_span").addClass("cco");
		$(".content-all .content").eq(index).siblings().find(".cc_span").removeClass("cco");
		$(".content-all .content").eq(index).find("img").addClass("sucimg");
		$(".content-all .content").eq(index).siblings().find("img").removeClass("sucimg");

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	} else {
		$(".content-all .content").eq(index).addClass('active');
		$(".content-all .content").eq(index).siblings().removeClass('active');
		$(".content-all .content").eq(index).find(".cc_span").addClass("cco");
		$(".content-all .content").eq(index).siblings().find(".cc_span").removeClass("cco");
		$(".content-all .content").eq(index).find(".cacimg").addClass("sucimg");
		$(".content-all .content").eq(index).siblings().find(".cacimg").removeClass("sucimg");

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	}

	$(".pdBigImg div").eq(index).addClass('active');
	$(".pdBigImg div").eq(index).siblings().removeClass('active');

});

/*点击add显示对应信息*/

$("#atc").click(function() {
	preorderAdd(current_productid);
	$("#success-box").addClass("active");

	$(".SRange").html($("#ran_id").html());
	$(".SCCode").html($(".cco").html());
	$(".success-img").html($(".sucimg").html());
	$("body").css("overflow","hidden");
});

$("#closeSucc").click(function(){
	$("#success-box").removeClass("active");
	$("body").css("overflow", "auto");
});
$("#success-box .close-succ").click(function(){
	$("#success-box").removeClass("active");
	$("body").css("overflow", "auto");
});