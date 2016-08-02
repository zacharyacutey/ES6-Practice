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

function createBoxesForUsers() {
    let userCount = prompt("How many users are playing? \nMin: 2\nMax: None");
    let spaceForBoxes = document.getElementById("spaceForBoxes");

    for (i=1; i < parseInt(userCount) + 1; i++) {
        let playerNum = "player_" + i;

        spaceForBoxes.innerHTML = spaceForBoxes.innerHTML + "<div id=\"" + playerNum + "\"></div>"

        let playerDiv = document.getElementById(playerNum); // Returns null

        playerDiv.innerHTML = playerDiv.innerHTML + "<h3>Player " + i + "</h3>\n";
        playerDiv.innerHTML = playerDiv.innerHTML + "<canvas id=\"myCanvas_" + i + "\" width=\"1000\" height=\"100\"></canvas>";
    
        eval("let user_" + i + " = new User(50, document.getElementById(\"myCanvas_" + i + "\"));");
        eval("user_" + i + ".drawCircle(\"white\")");
    }
}

function game() {
    let roundNum = 0;

    let userOne = new User(50, document.getElementById("myCanvasOne"));
    let userTwo = new User(50, document.getElementById("myCanvasTwo"));

    userOne.drawCircle("white");
    userTwo.drawCircle("white");

    let willUserChangeColor = prompt("Do you want to change the circles' colors?  Y/N:").toLowerCase();

    if (willUserChangeColor == "y") {
        var firstCircleColor = prompt("What color do you want the first circle to be?");
        userOne.drawCircle(firstCircleColor);

        var secondCircleColor = prompt("What color do you want the second circle to be?");
        userTwo.drawCircle(secondCircleColor);
    }

    while (userOne.win === false && userTwo.win === false) {
        let randomNumber = Math.floor((Math.random() * 2) + 1);

        if (roundNum % 2 === 0) {
            userOne.trivia(randomNumber);
        } else {
            userTwo.trivia(randomNumber);
        } 

        roundNum++;
    }

    if (userOne.win) {
        alert("User One Wins!!!");
    }

    if (userTwo.win) {
        alert("User Two Wins!!!");
    }
}

createBoxesForUsers();
game();
