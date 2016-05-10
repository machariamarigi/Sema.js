//Assign click event on the #login button using jQuery
$('#login').click(function () {

	//Grab Name from the input fields 
	var loginGrt = S$($('#firstname').val(), $('#lastname').val());

	//hide the login field
	$('#loginjumbo').hide();

	//Informal greeting
	//JQGreeting method
	loginGrt.setLang($('#lang').val()).JQGreeting('#greeting').log();

	setTimeout(function(){
		loginGrt.setLang($('#lang').val()).JQGreeting('#greetingFormal', true).log();
	}, 2000);
	

});