
var topics = ['Honolulu', 'Ocho Rios', 'Chang Mai', 'Paris', 'Barcelona', 'Frankfurt', 'Lisbon', 'Rome', 'Acapulco', 'Amsterdam'];
console.log("favorite city "+topics[4])

function displayCityInfo(){
$("#cityGifs").empty();
	var cityName = $(this).attr('data-name');
	var queryURL = "https://api.giphy.com/v1/gifs/search?q="+cityName+"&api_key=dc6zaTOxFJmzC&limit=10&rating=pg-13";
				              		
	$.ajax({url: queryURL, method: 'GET'}).done(function(response){
		console.log("success got data ", cityName);
		console.log(response);

for(var j = 0; j < response.data.length; j++) { 

		var cityDiv = $('<div class="city">');
		
		var rating = response.data[j].rating;
		var pOne = $('<p>').text("Rating: " + rating);
		cityDiv.prepend(pOne);

		
		var image = $('<img>').attr("src", response.data[j].images.fixed_height.url);
		cityDiv.append(image);

		$('#cityGifs').prepend(cityDiv);
		console.log(response.data[j].images.fixed_height.url);
}
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
	console.log("my city of choice "+topic)
	return false;
})

$(document).on('click', '.city', displayCityInfo);



renderButtons();
