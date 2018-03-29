/* globals $ */


// request books from api and then log them to console
$.ajax( "https://api.savvycoders.com/books" ).then( ( books ) => console.log( books ) );
// then console log the first book
$.ajax( "https://api.savvycoders.com/books" ).then( ( books ) => console.log( books[0] ) );
// next append your <p>,used <ul> to your page
$.ajax( "https://api.savvycoders.com/books" ).then(
    ( books ) => books
        .map(
            ( book ) => $( "<ul>" ).text( book.title )
        )
        .forEach(
            ( book ) => $( "#content" ).append( book )

        )
);
