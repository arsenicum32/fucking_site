// JavaScript
$( document ).ready( startScript );

function startScript(){
	var state = 1;
	$("#rightButton").on("click", function(){
		if (state == 1) {
			// alert("go!");
			$("body").css("overflow-y","auto");
			$(".page1").css("left","-100%");
			$(".page2").css("display","block");
			$(".page2").css("left","0");
			$("#production").css("color","#ff9933");
			$(".logo2").css("display","none");
			state = 2;
			console.log("the first");
		} else{
			// alert("go!");
			$("body").css("overflow-y","hidden");
			$(".page1").css("left","0");
			$(".page2").css("left","100%");
			$("#production").css("color","inherit");
			$(".logo2").css("display","block");
			state = 1;
			console.log("the second");
		};
	});
}