$(document).ready(function(){     

  $("input").keyup(function(){

	if ($('.no-results').is(':visible')) {
		$('.no-results').hide();
	}

	var term = $(this).val().toLowerCase();
    var $sites = $('.sites section');

    $sites.show().filter(function() {
        var text = $(this).find('a').text().replace(/\s+/g, ' ').toLowerCase();
        return !~text.indexOf(term);
    }).hide();

    if ( ! $('.site').is(':visible')) {
		$('.no-results').show();
    }
  });

	$(".sites").on('mouseenter','.site',function () {
		$(this).find(".tooltip").fadeIn();
	});

	$(".sites").on('mouseleave','.site',function () {
	    $(this).find(".tooltip").fadeOut('fast');
	});
});