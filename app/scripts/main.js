require.config({
	paths : {
		"jquery" : "../vendor/jquery/jquery",
		"backbone" : "../vendor/backbone/backbone",
		"underscore" : "../vendor/underscore/underscore",
		"bbFauxServer" : "../vendor/backbone-faux-server/backbone-faux-server"
	},
	shim : {
		"backbone" : {
			"deps" : ["underscore", "jquery"],
			"exports" : "Backbone"
		},
		"underscore" : {
			"deps" : [],
			"exports" : "_"
		}
	}
});

require(["views/appView"], function (appView) {
	appView.run();
});