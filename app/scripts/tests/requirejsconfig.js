require.config({
	  baseUrl : "app/scripts/src"
	, paths : {
		  "jquery" : "../../vendor/jquery/jquery"
		, "backbone" : "../../vendor/backbone/backbone"
		, "underscore" : "../../vendor/underscore/underscore"
	}
	, shim : {
		"backbone" : {
			  "deps" : ["underscore", "jquery"]
			, "exports" : "Backbone"
		}
		, "underscore" : {
			  "deps" : []
			, "exports" : "_"
		}
	}
});