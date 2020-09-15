$(function(){});
var hand = ["rock","paper","scissors"];
var  score= document.getElementById("score");
function rock() {
  document.getElementById("play").style.display="none";
  document.getElementById("denote").style.display="block";
  $("#player").html("<h3>YOU PICKED</h3><button class='rockagain'><img src='img/icon-rock.svg' alt='rock'></button>");
  rockPaperScissors();
}
function paper() {
  document.getElementById("play").style.display="none";
  document.getElementById("denote").style.display="block";
  $("#player").html("<h3>YOU PICKED</h3><button class='paperagain'><img src='img/icon-paper.svg' alt='paper'></button>");
  rockPaperScissors();
}
function scissors() {
  document.getElementById("play").style.display="none";
  document.getElementById("denote").style.display="block";
  $("#player").html("<h3>YOU PICKED</h3><button class='scissoragain'><img src='img/icon-scissors.svg' alt='scissor'></button>");
  rockPaperScissors();
}
function rockPaperScissors() {
  var symbol = arguments.callee.caller.name;
  var cpuSymbol = hand[Math.floor(Math.random() * 3)];
  switch(cpuSymbol) {
    case "rock":
      $("#computer").html("<h3 class='computer'>HOUSEPICKED</h3><button class='rockagain computer'><img src='img/icon-rock.svg' alt='rock'></button>");
      console.log(symbol == "scissors" ? denoteLoser() : symbol == "paper" ? denoteWinner() : denoteDraw());
      break;
    case "paper":
      $("#computer").html("<h3 class='computer'>HOUSEPICKED</h3><button class='paperagain computer'><img src='img/icon-paper.svg' alt='paper'></button>");
      console.log(symbol == "rock" ? denoteLoser() : symbol == "scissors" ? denoteWinner() : denoteDraw())
      break;
    case "scissors":
      $("#computer").html("<h3 class='computer'>HOUSEPICKED</h3><button class='scissoragain computer'><img src='img/icon-scissors.svg' alt='scissor'></button>");
      console.log(symbol == "paper" ? denoteLoser() : symbol == "rock" ? denoteWinner() : denoteDraw())
      break;
  }
}
function denoteWinner() {
  $("#result").html("<h1 class='text-white text-center result'>You Win!</h1><button type='button' class='btn btn-white playagain' onclick='show()'>PLAY AGAIN</button>")
  score.innerHTML = parseInt(score.innerHTML)+1; 
}
function denoteLoser() {
  $("#result").html("<h1 class='text-white text-center result'>You Lose!</h1><button type='button' class='btn btn-white playagain' onclick='show()' >PLAY AGAIN</button>")
  score.innerHTML = parseInt(score.innerHTML)-1; 
}
function denoteDraw() {
  $("#result").html("<h1 class='text-white text-center result'>You Draw!</h1><button type='button' class='btn btn-white playagain' onclick='show()' >PLAY AGAIN</button>")
}

function show() {
    document.getElementById("play").style.display="block";
    document.getElementById("denote").style.display="none";
}

