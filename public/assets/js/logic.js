$(function() {
	//On-click function that submits the form
	$("#submit").on("click", function(event) {
		event.preventDefault();
		//Takes the form input and prepares it to be sent
		var newBurger = {
			name: $("#burger").val().trim()
		};
		//Posts the form data and reloads the page when finished
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
		//Grabs the data id from the button tag
		var id = $(this).data("id");
		//Sends the request to update the database, then updates the page
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: id
		}).then(
			function(data) {
				location.reload();
			}
		);
	});
});
