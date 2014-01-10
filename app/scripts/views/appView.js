define(["jquery", "underscore", "backbone", "models/todo", "bbFauxServer"], function ($, _, Backbone, Todo, bbFauxServer) {
	bbFauxServer.get("todo/:id",function (context, id) {
		console.log("todo get is triggered!");
		console.log(context);
		console.log("the fetched todo id is " + id);
		return {
			id: id,
			title : "title is feteched",
			complete : 1
		};
	});
	return {
		run : function () {
			console.log("hello appview!");
			console.log("backbone-faux-server's version :" + bbFauxServer.getVersion());
			var todo = new Todo({id : 1});
			console.log("todo is following: ");
			console.log(todo.toJSON());
			todo.fetch();	
			console.log("todo is .. after fetched");
			console.log(todo.toJSON());
		}
	};
} );