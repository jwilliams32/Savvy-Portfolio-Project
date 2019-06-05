import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


var state = {
    "title": "Welcome to My Portfolio Page"
};


document
    .querySelector( "#root" )
    .innerHTML = `
      ${Navigation( state )}
      ${Header( state )}
      ${Content( state )}
      ${Footer( state )}
    `;
