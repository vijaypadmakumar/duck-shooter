var level = 1;

$("#duck").on("click", function () {
  $("h3").text("Points " + level++);
  randomPostion();
  var audio = new Audio("./sounds/gun.mp3");
  audio.play();
});

function randomPostion() {
  var randomHeight = Math.floor(Math.random() * 545) + 10;
  var randomWidth = Math.floor(Math.random() * 1700) + 10;
  $("#duck").css("top", randomHeight);
  $("#duck").css("left", randomWidth);
}
