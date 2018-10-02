export default function Navigation(){
    return `
<div id="navigation">
  <a href="../contact/index.html">Contact</a>
  <a href="../blog/index.html">Blog</a>
  <a href="/index2.html">Profile</a>
  <a href="../projects/blackjack/index.html">Blackjack</a>

  <a class="active" href="../index.html">Home</a>
  <div class="dropdown">
    <div class="dropbtn">Projects
      <i class="fa fa-caret-down"></i>
    </div>
    <div class="dropdown-content">
      <a href="../projects/rps/index.html">Paper Rock Scissors</a>
      <a href="../../projects/choose-your-own-adventure/index.html">CYOA</a>
      <a href="../projects/blackjack/index.html">Black Jack</a>
      <a href="../projects/index.html">View All</a>
    </div>
  </div>

`;
}
