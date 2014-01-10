define(["underscore", "backbone"], function	(_, Backbone) {
	var Todo = Backbone.Model.extend({
		defaults : {
			id : "",
			complete : 0, 
			title : ""
		},
		url : function () {return "todo/" + this.id;}
	});

	return Todo;
});