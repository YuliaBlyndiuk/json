var endPoint = 'https://www.googleapis.com/youtube/v3/search';

//Send request to get data from the API
function getInfoFromApi(searchTerm, callback){
	var query = {
		part: 'snippet',
		key: 'AIzaSyAvs26d6K1XqqW3U_N2r1tgCP2kk_7Kf3M',
		q: searchTerm
	};
	$.getJSON(endPoint, query, callback);
}

//Display the result
function displayData(data){
	var resultItems = "";
	// We want to find the data for videos that matched the search.
	// console.log(data);
	data.items.forEach(function(item){
		//console.log(item);
		//console.log(item.snippet.thumbnails.default.url);
		resultItems += '<div>' + '<img src="' + item.snippet.thumbnails.default.url + '">' + '</div>';
	})
	
	$('.js-search-results').html(resultItems);
}


//Listener: when form is filled out & submitted, 
//run this:
function listenerWatchSubmit(){
	$('.js-search-form').submit(function(e){
		e.preventDefault();
		var query = $(this).find('.js-query').val();
		getInfoFromApi(query, displayData);
		//console.log('query is', query);
	});
}

//When the page is loaded, perform smth:
$(function(){
	listenerWatchSubmit()
});
