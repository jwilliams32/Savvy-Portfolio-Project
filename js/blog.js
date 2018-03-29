/* globals $ */

// place ajax in a new variable
var $content = $( "#content" );
// var $posts = $( "<ul>" );
// receit its the promise $.ajax ......
var getPosts = $.ajax( "https://jsonplaceholder.typicode.com/posts" );

function generatePosts( posts ){
    // postList is displayed in a ul list
    // its an object $ = object, $postLists = object
    var $postLists = $( "<ul>" );
    // postItems are each post by itself
    var $postItems = posts
    // more efficent
    // slice shows the first 10 post
        .slice( 0, 11 )
        // filter each post by its id less than 11
        // filter is called 100 times

        // .filter(
        //     ( post ) => post.id < 11
        // )
        // map each post in a li by its title
        // map only maps over 10 post's due to only 10 being less than 11
        // 2
        .map(
            // each post is in a li the text of the post title is displayed
            ( post ) => $( "<li>" ).text( post.title )
        );
    // return the postList(ul) and attach the post items (li)
    // postLists equals <ul> <li>*10 </ul>

    return $postLists.append( $postItems );
}

// function appendFirstPost( post ){
//     $content.append( post.title );
// }
//
// getPosts.then( ( posts ) => appendFirstPost( posts[0] ) );
// posts is an array of posts objects
function appendPosts( posts ){
    // $posts is now the entire generatePosts object
    var $posts = generatePosts( posts );
    // now $content is the html tag which the data will be displayed
    // the posts are added to the #content tag or Dom

    $content.append( $posts );
}
// getPosts comes from the jsonplaceholder site
// then it uses appendPosts which will use generatePosts
getPosts.then( appendPosts );
// getPosts.then( ( posts ) => appendPosts( posts[0] ) );
