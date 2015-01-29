$(document).ready(function() {
  
	$("form").on("submit", function(event) {
		event.preventDefault();
		var test = event.target.movieName.value;
		console.log(test);

		$.ajax({
			url: "http://www.omdbapi.com/?s=" + test,
			success: function (data){
				console.log(data);
				$("body").append("<h2>" + data + "</h2>")			

				// this is where the bonus ajax would go

			}
		});

	});

});