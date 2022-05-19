
$(document).ready(function () {
	$("body").css({'visibility': "visible", "opacity": "1"});
	$(".cont-open").click(function() {
		$('html').addClass('no-scroll');
		$(".cont__left, .cont__left-overlay").addClass("active")
	});
	$(".cont-close, .cont__left-overlay").click(function() {
		$('html').removeClass('no-scroll');
		$(".cont__left, .cont__left-overlay").removeClass("active")
	});
	
	$(".m-bg-cont").each(function() {
		var img = $(this).find("img:first-of-type").attr("src");
		$(this).css("background-image", "url(" + img + ")");
	});

	$(".first__bottom-count-container").hide();
	

	$(document).on('click', '.number-input-container .number-increment', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            max = parseInt($input.attr('max')),
            step = parseInt($input.attr('step'));
		let temp = val + step;
		$input.val(temp <= max ? temp : max);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
		if ($input.val() > 0) {
			$(this).closest(".first__count").removeClass("hide");
		}
		var price = $(this).closest(".first__item").find(".first__item-price b").attr("data-price");
		price = price.replace(/\s+/g, '');
		console.log(price);
		price = price * $input.val();
		price = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
		$(this).closest(".first__item").find(".first__item-price b").text(price)
		var index = $(this).closest(".first__item").index();
		index = ++index
		$(".first__bottom-count-" + index).find(".count-block").text($input.val()+"шт");
		$(".first__bottom-count-" + index).show();
		if ($input.val() == 0) {
			$(this).closest(".first__count").addClass("hide")
			var price = $(this).closest(".first__item").find(".first__item-price b").attr("data-price");
			price = price.replace(/\s+/g, '');
			price = price * 1;
			price = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$(this).closest(".first__item").find(".first__item-price b").text(price)
		}
    });
    $(document).on('click', '.number-input-container .number-decrement', function(e) {
        let $input = $(this).siblings('.number-input'),
            val = parseInt($input.val()),
            min = parseInt($input.attr('min')),
            step = parseInt($input.attr('step'));
		let temp = val - step;
		$input.val(temp >= min ? temp : min);
		$(this).closest(".number-input-container").find(".number-result").text($input.val());
		if ($input.val() == 0) {
			$(this).closest(".first__count").addClass("hide");
		}
		var price = $(this).closest(".first__item").find(".first__item-price b").attr("data-price");
		price = price.replace(/\s+/g, '');
		price = price * $input.val();
		price = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
		$(this).closest(".first__item").find(".first__item-price b").text(price)
		var index = $(this).closest(".first__item").index();
		index = ++index
		$(".first__bottom-count-" + index).find(".count-block").text($input.val()+"шт");
		if ($input.val() == 0) {
			$(this).closest(".first__count").addClass("hide")
			var price = $(this).closest(".first__item").find(".first__item-price b").attr("data-price");
			price = price.replace(/\s+/g, '');
			price = price * 1;
			price = String(price).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');
			$(this).closest(".first__item").find(".first__item-price b").text(price)
			$(".first__bottom-count-" + index).hide();
		}

    });

	$(".serv-open").click(function() {
		$(".serv").toggleClass("active");
		$(".serv-open").toggleClass("active");
	});

	$(".menu-open").click(function() {
		$(".mobile-menu-overlay, .mobile-menu").addClass("active")
	});

	$(".mobile-menu-overlay, .mobile-menu-close").click(function() {
		$(".mobile-menu-overlay, .mobile-menu").removeClass("active")
	});

	 
});