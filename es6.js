class User {
    constructor(distance, canvas) {
        this.distance = distance;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.win = false;
    }

    drawCircle(color) {
	    this.ctx.beginPath();
	    this.ctx.arc(this.distance, 50, 50, 0, 2 * Math.PI);
	    this.ctx.fillStyle = color;
	    this.ctx.fill();
	    this.ctx.stroke();
    }

    trivia(myNumber) {
        let move = prompt("Am I thinking of 1 or 2?");

        if (move == myNumber) {
            alert("Correct!");
            this.distance += 100;
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.drawCircle(this.distance);

            if (this.distance == 950) {
                this.win = true;
            }
        } else {
            alert("Wrong! Maybe next time.  The number was " + myNumber);
        }
    }
}


function createShapesForUsers() {

    // set up default boxes and circles

    let userCount = prompt("How many users are playing? \nMin: 2\nMax: None");
    let spaceForBoxes = document.getElementById("spaceForBoxes");

    for (i=1; i < parseInt(userCount) + 1; i++) {
        player = "player_" + i;

        spaceForBoxes.innerHTML = spaceForBoxes.innerHTML + "<div id=\"" + player + "\"></div>";

        eval("let playerDiv = document.getElementById(\"player_" + i + "\");");

        eval("playerDiv.innerHTML = playerDiv.innerHTML + \"<h3>Player " + i + "</h3>;\"");
        eval("playerDiv.innerHTML = playerDiv.innerHTML + \"<canvas id=\"myCanvas_" + i + "\" width=\"1000\" height=\"100\"></canvas>\";");

        eval("user_" + i + " = new User(50, document.getElementById(\"myCanvas_" + i + "\"));"); // global variables for Josh
        eval("user_" + i + ".drawCircle(\"white\")");
    }

    // change color of circles

    let willUserChangeColor = prompt("Do you want to change the circles' colors?  Y/N:").toLowerCase();

    if (willUserChangeColor == "y") {
        for (i=1; i < parseInt(userCount) + 1; i++) {
            var circleColor = prompt("What color do you want circle " + i + " to be?");
            // eval("user_" + i + ".drawCircle(circleColor);")
            players[i].drawCircle(circleColor)
        }
    }
}

function game() {
    let roundNum = 0;

    while (user_1.win === false && user_2.win === false) {
        let randomNumber = Math.floor((Math.random() * 2) + 1);

        if (roundNum % 2 === 0) {
            user_1.trivia(randomNumber);
        } else {
            user_2.trivia(randomNumber);
        } 

        roundNum++;
    }

    if (user_1.win) {
        alert("User One Wins!!!");
    }

    if (user_2.win) {
        alert("User Two Wins!!!");
    }
}

createShapesForUsers();
game();
