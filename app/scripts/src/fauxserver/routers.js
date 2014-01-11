define(["../../../vendor/backbone-faux-server/backbone-faux-server"], function (bbFauxServer) {
	console.log("begin setting up faux server.");
	console.log("backbone-faux-server's version :" + bbFauxServer.getVersion());

	bbFauxServer.get("todo/:id",function (context, id) {
		console.log("todo get is triggered!");
		console.log(context);
		console.log("the fetched todo id is " + id);
		return {
			id: id,
			title : "title is feteched.",
			complete : 1
		};
	});

	console.log("finish setting up faux server.");

	return bbFauxServer;
});