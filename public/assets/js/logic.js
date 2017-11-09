$(function() {
	$("#submit").on("click", function(event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burger").val().trim()
		};
		console.log("test");
		console.log(newBurger);

		$.post("/api/burgers", newBurger).then(
			function(data) {
				console.log("Data posted")

				location.reload();
			}
		);

	});
		$(".devour").on("click", function(event) {
		event.preventDefault();

		console.log("test");

		var id = $(this).data("id")

		$.post("/api/burgers/:id", newBurger).then(
			function(data) {
				console.log("Data posted")

				location.reload();
			}
		);
	});
});
