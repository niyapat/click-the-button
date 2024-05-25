$(document).ready(function () {
	var score = 0;
	var timeLeft = 10;
	var gameInterval;

	function moveButton() {
		var x = Math.random() * ($(window).width() - $("#clickMeButton").width());
		var y = Math.random() * ($(window).height() - $("#clickMeButton").height());
		$("#clickMeButton").css({ top: y, left: x });
	}

	$("#clickMeButton").click(function () {
		score++;
		$("#score").text(score);
		moveButton();
	});

	function startGame() {
		gameInterval = setInterval(function () {
			timeLeft--;
			$("#timeLeft").text(timeLeft);
			if (timeLeft <= 0) {
				clearInterval(gameInterval);
				$("#clickMeButton").off("click");
				alert("Game over! Your score is: " + score);
			}
		}, 500);
	}

	startGame();
});
