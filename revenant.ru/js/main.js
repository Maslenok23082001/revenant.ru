$(document).ready(function(){
	var leftp = 0;
	$("#strelochki_slider img:last-child").click(function(){
		
		if (leftp == -945){
			$("#polosa").css({"marginLeft" : (0+"px")});
			leftp=0;
		}
		else {
			leftp = leftp - 315;
			$("#polosa").css({"marginLeft" : (leftp+"px")});
			console.log("right");
		}
		
	});
		$("#strelochki_slider img:first-child").click(function(){
			
			if (leftp >= 0){
				$("#polosa").css({"marginLeft" : (-945+"px")});
				leftp=-945;
				console.log("left");
			}
			else {
				leftp+=315;
				$("#polosa").css({"marginLeft" : (leftp+"px")});
				console.log("left");
			}
			
		});
});


$(document).ready(function(){
	var leftp = 0;
	$("#napravl #ri").click(function(){
		
		if (leftp == -496){
			$("#polosa2").css({"marginLeft" : (0+"px")});
			leftp=0;
		}
		else {
			leftp = leftp - 248;
			$("#polosa2").css({"marginLeft" : (leftp+"px")});
			console.log("right");
		}
		
	});
	$("#napravl #le").click(function(){
		
		if (leftp >= 0){
			$("#polosa2").css({"marginLeft" : (-496+"px")});
			leftp=-496;
		}
		else {
			leftp = leftp + 248;
			$("#polosa2").css({"marginLeft" : (leftp+"px")});
			console.log("right");
		}
		
	});
});


// animate.css


$(document).ready(function(){
	setTimeout(function(){
		$("#logotip").addClass("animated fadeInRight");
	}, 300);
	setTimeout(function(){
		$("#two_p #two_p_p1").addClass("animated fadeInLeft");
	}, 300);
	setTimeout(function(){
		$("#two_p #two_p_p2").addClass("animated fadeInUp");
	}, 300);
	setTimeout(function(){
		$("#content_image").addClass("animated rollIn");
	}, 300);
	$(window).scroll(function(){
		$(".mov").each(function(){
			var imagePos = $(this).offset().top;
			var topofwindow = $(window).scrollTop();
			if (imagePos < topofwindow+900) {
				$(this).addClass("animated fadeInUpBig");
			}
		});
	}); 
});
