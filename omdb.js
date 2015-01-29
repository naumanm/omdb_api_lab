$(document).ready(function() {
  
	$("form").on("submit", function(event) {
		event.preventDefault();
		var test = event.target.movieName.value;
		console.log(test);

		$.ajax({
			url: "http://www.omdbapi.com/?t=" + test,
			success: function (data){
				console.log(data);
			}
		});

	});

});