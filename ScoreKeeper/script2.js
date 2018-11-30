var p1Button= document.querySelector('#p1');
var p2Button= document.querySelector('#p2');
var resetButton= document.querySelector('#reset');
var p1Score=0;
var p2Score=0;
var player1Score= document.querySelector('#one')
var player2Score= document.querySelector('#two')
var winningScoreDisplay = document.querySelector("#winningScoreDisplay");
var gameOver=false;
var winningScore=5;
var numInput = document.querySelector("input");

p1Button.addEventListener('click', function()
{
  if(!gameOver)
  {
  p1Score++;
  player1Score.textContent=p1Score;
  if (p1Score == winningScore)
  {
    player1Score.classList.add("winner");
    gameOver=true;
  }
}

});
p2Button.addEventListener('click', function() {
  {
    if(!gameOver)
    {
    p2Score++;
    player2Score.textContent=p2Score;
    if (p2Score == winningScore)
    {
      player2Score.classList.add("winner");
      gameOver=true;
    }
  }
  }

});

resetButton.addEventListener('click', function() {
  reset();
});

function reset(){
  p1Score=0;
  p2Score=0;
  player1Score.textContent=p1Score;
  player2Score.textContent=p2Score;
  player1Score.classList.remove("winner");
  player2Score.classList.remove("winner");
  gameOver=false;
}

numInput.addEventListener('change', function() {
  winningScoreDisplay.textContent = "Playing to: "+this.value;
	winningScore = Number(this.value);
  reset();
  // body...
});
