class User {
    constructor(distance, canvas) {
        this.distance = distance;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.win = false;
    }

    drawCircle() {
	    this.ctx.beginPath();
	    this.ctx.arc(this.distance, 50, 50, 0, 2 * Math.PI);
	    this.ctx.fillStyle = "red";
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

function game() {
    let roundNum = 0;

    let userOne = new User(50, document.getElementById("myCanvasOne"));
    let userTwo = new User(50, document.getElementById("myCanvasTwo"));

    userOne.drawCircle();
    userTwo.drawCircle();
    
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

game();
