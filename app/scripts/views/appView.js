define(["jquery", "underscore", "backbone", "models/todo"], function ($, _, Backbone, Todo) {
	return {
		run : function () {
			console.log("hello appview!");
			var todo = new Todo({id : 1});
			console.log("todo is following: ");
			console.log(todo.toJSON());
			todo.fetch();	
			console.log("todo is .. after fetched");
			console.log(todo.toJSON());
		}
	};
} );