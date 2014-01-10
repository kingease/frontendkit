define(["jquery", "underscore", "backbone"], function ($, _, Backbone) {
	return {
		run : function () {
			console.log("hello appview!");
			console.log($);
			console.log(_);
			console.log(Backbone);
		}
	};
} );
