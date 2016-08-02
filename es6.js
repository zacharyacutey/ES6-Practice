// Set up user one's circle

let currentDistanceofUserOne = 50;
let canvasOne = document.getElementById("myCanvasOne");
let ctxOne = canvasOne.getContext("2d");

function drawCircleOne(distance) {
    ctxOne.beginPath();
    ctxOne.arc(distance, 50, 50, 0, 2 * Math.PI);
    ctxOne.fillStyle = "red";
    ctxOne.fill();
    ctxOne.stroke();
}
drawCircleOne(currentDistanceofUserOne);


// Set up user two's circle

let currentDistanceofUserTwo = 50;
let canvasTwo = document.getElementById("myCanvasTwo");
let ctxTwo = canvasTwo.getContext("2d");

function drawCircleTwo(distance) {
    ctxTwo.beginPath();
    ctxTwo.arc(distance, 50, 50, 0, 2 * Math.PI);
    ctxTwo.fillStyle = "red";
    ctxTwo.fill();
    ctxTwo.stroke();
}
drawCircleTwo(currentDistanceofUserTwo);


// Manipulate circles based on trivia questions

function turn(){
    function userOne() {
        let myNumber = Math.floor((Math.random() * 2) + 1);

        let move = prompt("Am I thinking of 1 or 2?");
        if(move == myNumber){
            alert("Correct!");
            currentDistanceofUserOne += 100;
            ctxOne.clearRect(0, 0, canvasOne.width, canvasOne.height);
            drawCircleOne(currentDistanceofUserOne);
        } else {
            alert("Wrong! Maybe next time. The number was " + myNumber);
        }
    }

    function userTwo() {
        let myNumber = Math.floor((Math.random() * 2) + 1);

        let move = prompt("Am I thinking of 1 or 2?");
        if(move == myNumber){
            alert("Correct!");
            currentDistanceofUserTwo += 100;
            ctxTwo.clearRect(0, 0, canvasTwo.width, canvasTwo.height);
            drawCircleTwo(currentDistanceofUserTwo);
        } else {
            alert("Wrong! Maybe next time. The number was " + myNumber);
        }
    }

    let roundNum = 0;

    while (true){

        if (currentDistanceofUserOne == 950) {
            alert("User One Wins!!!");
            break;
        } else if (currentDistanceofUserTwo == 950) {
            alert("User Two Wins!!!");
            break;
        } else {
            if (roundNum % 2 == 0) {
            	userOne();
            } else {
            	userTwo();
            } 
        }
        roundNum++;
    }

    alert("You win!!!");
}

turn();