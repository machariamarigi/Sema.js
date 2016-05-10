/*
	Sema JavaScript Library v.0.03

	supports jQuery.js
	http://jquery.com/

	Author Macharia Marigi
	machariamarigi@gmail.com

*/
(function(global, $){

	//'new' for objects
	var Sema = function(firstName, lastName, language){
		return new Sema.init(firstName, lastName, language);
	};

	//language support 
	var supportedLangs = ['ENG', 'SWA', null];

	//informal and formal greetings
	var greetings = {
		ENG: {
			informal: 'Hello',
			formal: 'Greetings'
		},
		SWA: {
			informal: 'Habari',
			formal: 'Hujambo' 
		},
		//if we get a null result from the DOM, English is the default language
		null: {
			informal: 'Hello',
			formal: 'Greetings'
		}
	};

	//message logger
	var logMessages = {
		ENG: 'Logged in',
		SWA: 'Kuingia akaunti'
	};

	//Building methods all our objects will have access to
	Sema.prototype = {

		//Builds full name in the formal format
		fullName: function(){
			return this.lastName + ', ' + this.firstName;
		},

		//language validator
		validate: function(){
			if (supportedLangs.indexOf(this.language)  === -1){
				throw "Invalid Language";
			}
		},

		//informal greetings
		greetings: function() {
			return greetings[this.language].informal+ ' ' + this.firstName + '!';
		},

		//formal greetings
		formalGreetings: function(){
			return greetings[this.language].formal+ ' ' + this.fullName();
		},

		//check whether to use formal or informal greeting
		greet: function(formal){
			var grt;

			//null or unndefined coerces to false
			if(formal){
				grt = this.formalGreetings();
			}
			else{
				grt = this.greetings();
			}

			if(console){
				console.log(grt);
			}

			//'this' refers to calling object @ execution time
			//makes the method chainable
			return this;
		},

		//console logger
		log: function(){
			if(console){
				console.log(logMessages[this.language]+ ': '+ this.fullName());
			}

			//'this' refers to calling object @ execution time
			//makes the method chainable
			return this;
		},

		//Method that sets which is used 
		setLang: function (lang){
			this.language = lang;
			this.validate();

			//'this' refers to calling object @ execution time
			//makes the method chainable
			return this;
		},

		//Using jQuery Selectors
		JQGreeting: function(selector, formal){
			//check whether jQuery is loaded 
			if (!$) {
				throw "jQuery not detected";
			}

			//check whether a jQuery selector is used
			if (!selector) {
				throw "jQuery selector not detected";
			}

			//Greeting Message
			var grt;

			//Check whether greeting will be formal or informal
			if (formal) {
				grt = this.formalGreetings();
			}else{
				grt = this.greetings();
			}

			//Attach greeting to the selector as a html object
			$(selector).html(grt);

			//'this' refers to calling object @ execution time
			//makes the method chainable
			return this;
		}

	};

	//function construcor for the objects
	Sema.init = function(firstName, lastName, language){

		//setting defaults
		var self = this;
		self.firstName = firstName || '';
		self.lastName = lastName || '';
		//if no language is used English is set as our default
		self.language = language || 'ENG';
		if (self.language === 'null') {
			self.language = 'ENG';
		}

	};

	//giving created objects access to the Sema prototype without using 'new'
	Sema.init.prototype = Sema.prototype;

	//Making the S$ for simple typing and attaching it and Sema to the global object
	global.Sema = global.S$ = Sema;

})(window, jQuery);