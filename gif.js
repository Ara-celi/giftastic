
var topics = ['Honolulu', 'Ocho Rios', 'Chang Mai', 'Paris', 'Barcelona', 'Frankfurt', 'Lisbon', 'Rome', 'Acapulco', 'Amsterdam'];
console.log("favorite city "+topics[4])

function displayCityInfo(){

	var cityName = $(this).attr('data-name');
	var queryURL = //"http://api.giphy.com/v1/gifs/search?q=" + cityName + "&limit=10&rating=pg-13&fmt=json";
                   "http://api.giphy.com/v1/gifs/search?q="+cityName+"&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";
				//"http://upload.giphy.com/v1/gifs/search?q=+prince+&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13&fmt=json";                   	
	
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		console.log("success got data ", cityName);
		console.log(response);

		var cityDiv = $('<div class="city">');
		
		var rating = response.rating;
		var pOne = $('<p>').text("Rating: " + rating);
		cityDiv.prepend(pOne);

		var image = $('<img>').attr(src="http://upload.giphy.com/v1/gifs", response.image);
		cityDiv.append(image);

		$('#cityGifs').prepend(cityDiv);
		console.log(response.rating)
	})
	
}

function renderButtons(){

	$('#cityViews').empty();
	
	for(var i = 0; i < topics.length; i++) { 
	    var btn = $('<button>')
	    btn.addClass('city');
	    btn.attr('data-name', topics[i]);
	    btn.text(topics[i]);
	    $('#cityViews').append(btn);    
	}
}
	
$('#selectCity').on('click', function() {

	var topic = $('#city-input').val().trim();
	topics.push(topic);
	renderButtons();
	return false;
})

$(document).on('click', '.city', displayCityInfo);

renderButtons();
