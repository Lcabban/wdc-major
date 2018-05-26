
$( document ).ready(function() {
	$("#dt").click(function() {
		$("#detail").show();
		$("#rooms, #reviews, #bookings").hide();
		$("#rm, #rev, #bk").css("background-color", "#d9e3f7");
		$("#dt").css("background-color", "white");
	});

	$("#rm").click(function() {
		$("#detail, #reviews, #bookings").hide();
		$("#rooms").show();
		$("#dt, #rev, #bk").css("background-color", "#d9e3f7");
		$("#rm").css("background-color", "white");
	});

	$('#rev').click(function() {
		$("#detail, #rooms, #bookings").hide();
		$("#reviews").show();
		$("#rm, #dt, #bk").css("background-color", "#d9e3f7");
		$("#rev").css("background-color", "white");
	});

	$('#bk').click(function() {
		$("#detail, #rooms, #reviews").hide();
		$("#bookings").show();
		$("#rm, #rev, #dt").css("background-color", "#d9e3f7");
		$("#bk").css("background-color", "white");
	});
});

$( document ).ready(function() {
		$("#detail-edit").click(function() {
		$("div#detail input, #detail-ii-add, #detail-fac-add").show();
		$("#desc, #psw, #hname, #location, #cont, #email, #fac, #ii").hide();
	});

		$("#detail-save").click(function() {
		$("div#detail input, #detail-ii-add, #detail-fac-add").hide();
		$("#desc, #psw, #hname, #location, #cont, #email, #fac, #ii").show();
	});
});

$( document ).ready(function() {
		$("#rooms-modal-Btn").click(function() {
			$("#rooms-modal").show();
	});
})

$( document ).ready(function() {
		$("#close-rooms-modal").click(function() {
			$("#rooms-modal").hide();
	});
});

$( document ).ready(function() {
	$("#pi").click(function() {
		$("#personal-info").show();
		$("#past-bookings, #future-bookings").hide();
		$("#pi").css("background-color", "white");
		$("#fb, #pb").css("background-color", "#d9e3f7");
	});

	$("#fb").click(function() {
		$("#personal-info, #past-bookings").hide();
		$("#future-bookings").show();
		$("#pi, #pb").css("background-color", "#d9e3f7");
		$("#fb").css("background-color", "white");
	});

	$("#pb").click(function() {
		$("#future-bookings, #personal-info").hide();
		$("#past-bookings").show();
		$("#fb, #pi").css("background-color", "#d9e3f7");
		$("#pb").css("background-color", "white");
	});
});

$( document ).ready(function() {
		$("#personal-info-edit").click(function() {
		$("#personal-info input").show();
		$("#user-password, #user-first-name, #user-last-name, #user-email").hide();
	});

		$("#personal-info-save").click(function() {
		$("#personal-info input").hide();
		$("#user-password, #user-first-name, #user-last-name, #user-email").show();
	});
});

$( document ).ready(function() {
	$("#step1-next").click(function() {
		$("#step1, #step4, #step3").hide();
		$("#step2").show();
		$("#step-1, #step-4, #step-3").css("background-color", "#d9e3f7");
		$("#step-2").css("background-color", "white");
	});

	$("#step2-back").click(function() {
		$("#step3, #step4, #step2").hide();
		$("#step1").show();
		$("#step-3, #step-4, #step-2").css("background-color", "#d9e3f7");
		$("#step-1").css("background-color", "white");
	});

	$('#step2-next').click(function() {
		$("#step1, #step4, #step2").hide();
		$("#step3").show();
		$("#step-1, #step-4, #step-2").css("background-color", "#d9e3f7");
		$("#step-3").css("background-color", "white");
	});

	$('#step3-back').click(function() {
		$("#step1, #step4, #step3").hide();
		$("#step2").show();
		$("#step-1, #step-4, #step-3").css("background-color", "#d9e3f7");
		$("#step-2").css("background-color", "white");
	});

	$("#step3-next").click(function() {
		$("#step1, #step3, #step2").hide();
		$("#step4").show();
		$("#step-1, #step-3, #step-2").css("background-color", "#d9e3f7");
		$("#step-4").css("background-color", "white");
	});

	$("#step4-back").click(function() {
		$("#step1, #step4, #step2").hide();
		$("#step3").show();
		$("#step-1, #step-4, #step-2").css("background-color", "#d9e3f7");
		$("#step-3").css("background-color", "white");
	});

	$("#step4-finish").click(function() {

	});
})

jQuery( document ).ready(function() {
		
		var back =jQuery(".prev");
		var	next = jQuery(".next");
		var	steps = jQuery(".step");
		var div_steps = jQuery(".steps")
		
		next.bind("click", function() { 
			jQuery.each( steps, function( i ) {
				if (!jQuery(steps[i]).hasClass('current') && !jQuery(steps[i]).hasClass('done')) {
					jQuery(steps[i]).addClass('current');
					jQuery(steps[i - 1]).removeClass('current').addClass('done');
					jQuery(div_steps[i]).addClass('step-current').removeClass('step-not-current');
					jQuery(div_steps[i - 1]).removeClass('step-current').addClass('step-not-current');
					return false;
				}
			})		
		});
		back.bind("click", function() { 
			jQuery.each( steps, function( i ) {
				if (jQuery(steps[i]).hasClass('done') && jQuery(steps[i + 1]).hasClass('current')) {
					jQuery(steps[i + 1]).removeClass('current');
					jQuery(steps[i]).removeClass('done').addClass('current');
					jQuery(div_steps[i]).addClass('step-current').removeClass('step-not-current');
					jQuery(div_steps[i + 1]).removeClass('step-current').addClass('step-not-current');
					return false;
				}
			})		
		});

	});

$( document ).ready(function() {
	$("#li").click(function() {
		$("#login_form").show();
		$("#signup_form, #hotel_form, #hotel_signup").hide();
	});

	$("#su").click(function() {
		$("#signup_form").show();
		$("#login_form, #hotel_form, #hotel_signup").hide();
	});

	$("#h").click(function() {
		$("#hotel_form, #hotel_signup").show();
		$("#signup_form, #login_form").hide();
	});
});

$( document ).ready(function() {
	$("#tbl").click(function() {
		$(".modal").show();
	});

	$("#cancel").click(function() {
		$(".modal").hide();
	});
});