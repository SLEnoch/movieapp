(function ($) {
// ALL YOUR CODE GOES AFTER THIS LINE!  Don't delete the very final line, though!


  // First step - listen for when the Search Button (indicated by the class 'search-button') is clicked
  $('.search-button').click(function(){

    // remove any already-existing results from results-area
    $('.results-area h3').remove();


    // if the search button was clicked, store the text from the search box
    // in a variable.
    var searchtext = '';
    searchtext = $('.search-box').val();

    // now, run the function runSearch using the value from the search box
    runSearch(searchtext);

  });

// don't get rid of this line!
}(jQuery));




// Our search function
function runSearch(userText){



  $.getJSON("http://www.omdbapi.com/?s=" + userText + "&r=json", function (data) {
    $.each(data.Search, function(counter, movie) {
      console.log(movie);
      //document.write(movie.Title);
      $('.results-area').append('<div class="movie-result">');
      $('.results-area').append('<h4>' + movie.Title + '</h4>');
      $('.results-area').append('<p>' + movie.Year + '</p>');
      $('.results-area').append('<img src="' + movie.Poster+ '">');

    $('.results-area').append('<a href= "http://www.imdb.com/title/' + movie.imdbDB + '"IMDB </a>');

  $('.results-area').append('</div>');

    });
  });
}
