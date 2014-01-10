define(["jquery", "underscore", "backbone", "models/todo"], function ($, _, Backbone, Todo) {
	return {
		run : function () {
			console.log("hello appview!");
			var todo = new Todo;
			console.log(todo.toJSON());
			todo.set({
				title : "my title is changed."
			});
			console.log(todo.toJSON());
		}
	};
} );