define(["underscore", "backbone"], function	(_, Backbone) {
	return Backbone.Model.extend({
		defaults : {
			id : "",
			complete : 0, 
			title : ""
		}
	});
});