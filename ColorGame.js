var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("resetButton");
var modeButtons = document.querySelectorAll(".mode")

for(var i = 0;i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        this.classList.add("selected");
        this.textContent === "Easy" ? numSquares = 3: numSquares =6;
        reset();
    });
}

function reset(){
    //<====generate new random color====>//
    colors = generateRandomColors(numSquares);
    //<====assign that new generated color to required color====>//
    pickedColor = pickColor();
    //<====change color display to match picked color====>//
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "NewColors?"
    messageDisplay.textContent = '';
    //<====change color of squares====>//
    for (var i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    } h1.style.backgroundColor = ("steelblue");
}

resetButton.addEventListener("click", function () {
    reset();
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++){
    //<====Adds color to each square====>//
    squares[i].style.backgroundColor = colors[i];
    //<====adds eventLisenter to squars arr====>//
    squares[i].addEventListener ("click", function(){
        //<====grabs color of clicked square====>//
        var clickedColor = this.style.backgroundColor;
        //<====Compares clickedColor to pickedColor====>//
        if (clickedColor === pickedColor){
            messageDisplay.textContent = ("Correct!");
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
            resetButton.textContent = "Play again?"
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = ("Try Again");
        }
    })
}

function changeColors(color){
    for (var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
};
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
};
function generateRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to arr
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
};
function randomColor(){
    //<====pick a red color====>//
    var r = Math.floor(Math.random() * 256);
    //<====pick a green color====>//
    var g = Math.floor(Math.random() * 256);
    //<====pick a blue color====>//
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";

};
