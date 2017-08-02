$(function(){
	$(".join span").click(function(){
		$(".join span").removeClass("active");
		$(this).addClass("active");
	});
});
$("#box>div").eq(0).addClass("active");
$("#box>div").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
	$("#ul>li").eq($(this).index()).show().siblings().hide()
})

$("#boy img").mouseenter(function(){
				if($(this).hasClass("active")){

				}else{
					$(this).addClass("active").parent().next().children().first().removeClass("active");

				}
			});
			$("#girl img").mouseenter(function(){
				if($(this).hasClass("active")){

				}else{
					$(this).addClass("active").parent().prev().children().first().removeClass("active");

				}
			})