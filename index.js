import Navigation from "./components/Navigation";


var state = {
    "title": "Welcome to My Portfolio Page"
};


document
    .querySelector( "#root" )
    .innerHTML = `
      ${Navigation()}
      ${Header( state )}
      ${Content()}
      ${Footer()}
    `;
