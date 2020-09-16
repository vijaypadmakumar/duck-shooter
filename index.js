var level = 0;
var shotsFired = 0;

$("#duck").on("click", function () {
  level++;
  $("h3").text("Points " + level);
  randomPostion();
  playAudio("duck-sound");
  //   gameOver(level);
});

$("#play-area").on("click", function () {
  playAudio("gun");
  shotsFired++;
  //   gameOver(shotsFired);
});

function randomPostion() {
  var randomHeight = Math.floor(Math.random() * 545) + 10;
  var randomWidth = Math.floor(Math.random() * 1700) + 10;
  $("#duck").css("top", randomHeight);
  $("#duck").css("left", randomWidth);
}

function playAudio(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function gameOver(level) {
  if (level === 10 || shotsFired === 10) {
    $("#play-area").off();
    $("#duck").off();
    $("h3").addClass("game-over");
    setTimeout(function () {
      $("h3").removeClass("game-over");
    }, 500);

    var accurary = Math.floor((level / shotsFired) * 100);

    $("h3").text("Accuracy : " + accurary + "\n" + " Ducks killed : " + level);
  }
}
