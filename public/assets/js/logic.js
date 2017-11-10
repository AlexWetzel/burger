$(function() {
	$("#submit").on("click", function(event) {
		event.preventDefault();

		var newBurger = {
			name: $("#burger").val().trim()
		};
		console.log("test");
		console.log(newBurger);

		$.ajax("/api/burgers/", {
			type: "POST",
			data: newBurger
		}).then(
			function(data) {
				console.log("Data posted")

				location.reload();
			}
		);

	});
		$(".devour").on("click", function(event) {
		event.preventDefault();

		console.log("test");

		var id = $(this).data("id");

		console.log(id);

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: id
		}).then(
			function(data) {
				// console.log("Data posted")

				location.reload();
			}
		);
	});
});
