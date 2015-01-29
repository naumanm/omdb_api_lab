$(document).ready(function() {
  
	$("form").on("submit", function(event) {
		event.preventDefault();
		var test = event.target.movieName.value;

		$.ajax({
			url: "http://www.omdbapi.com/?s=" + test,
			dataType : "json",
			success: function (data){
				data.Search.forEach(function(value) {
					console.log(value);
					$("body").append("<h4>" + value.Title + "</h4>");
				});
			}
		});

	});

});