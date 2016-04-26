$('#login').click(function () {
	var loginGrt = S$($('#firstname').val(), $('#lastname').val());
	$('#loginjumbo').hide();
	loginGrt.setLang($('#lang').val()).JQGreeting('#greeting').log();
	loginGrt.setLang($('#lang').val()).JQGreeting('#greetingFormal', true).log();
});