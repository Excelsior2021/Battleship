export default `
<h1 class="heading">
<a
  class="link"
  href="https://jonathankila.vercel.app/"
  target="_blank"
  rel="noreferrer">
  Battleship</a
>
</h1>

<div class="container">
<div class="instructions">
  <h2 class="sub-heading">Instructions</h2>
  <p>
    Based on the classic game Battleship. There are 5 ships in the enemy's
    fleet. Shoot down all the ships. Try to shoot down the enemy's fleet
    in the least amount of shots.
  </p>
  <p>
    Click on any coordinate to start. To restart the game, click the
    button below.
  </p>
  <button class="restart-button" id="restart-button">Restart</button>
</div>

<div class="game">
  <table id="table" class="table">
    <tr id="coord-nums"></tr>
  </table>
</div>

<div class="ships-list-container">
  <h2 class="sub-heading">Ships</h2>
  <ul id="ships-list" class="ships-list"></ul>
  <div class="log">
    <p id="coord-log" class="coord-log">Choose a coordinate</p>
    <p id="log-message" class="log-message"></p>
    <p id="game-over"></p>
  </div>
</div>
</div>
`
