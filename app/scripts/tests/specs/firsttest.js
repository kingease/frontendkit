require(['backbone','underscore'], function (Backbone, _) {
	describe("description", function() {
		it("backbone should be defined", function() {
			expect(Backbone).toBeDefined();
		});
		it("underscore should be defined", function() {
			expect(_).toBeDefined();	
		});
	});
});