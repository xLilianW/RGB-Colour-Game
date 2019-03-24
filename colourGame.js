var colours = generateColours(6)

var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.querySelector("#pickedColour")
colourDisplay.textContent = pickedColour
var msg = document.querySelector("#msg")
var banner = document.querySelector(".banner")
var reset = document.querySelector("#reset")
var modes = document.querySelectorAll(".mode")

init()

function init() {
	// Setting up square funcitonality
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colours[i]
		squares[i].addEventListener("click", function () {
			var clickedColour = this.style.backgroundColor
			if (clickedColour === pickedColour) {
				changeColours(pickedColour)
				msg.textContent = "Correct!"
				reset.textContent = "Play Again"
			}
			else {
				this.style.backgroundColor = "#232323"
				msg.textContent = "Try Again"
			}
		})
	}

	// Changing Modes
	for(var i = 0; i < modes.length; i++) {
		modes[i].addEventListener("click", function() {
			modes[0].classList.remove("selected")
			modes[1].classList.remove("selected")
			modes[2].classList.remove("selected")
			this.classList.add("selected")

			switch(this.textContent) {
				case "Easy":
					colours = generateColours(3)
					break
				case "Medium":
					colours = generateColours(6)
					break
				case "Hard":
					colours = generateColours(9)
					break
				default: 
			}

			resetBoard()
			showSquares()
			setColours()
		})
	}
}

// New colours / Play Again
reset.addEventListener("click", function(){
	colours = generateColours(colours.length)
	resetBoard()
	setColours()
})

// Change all colours upon winning
function changeColours(colour) {
	for(var i = 0; i < colours.length; i++) {
		squares[i].style.backgroundColor = colour
	}

	banner.style.backgroundColor = colour
}

// Pick colour to be guessed
function pickColour() {
	var rand = Math.floor(Math.random() * colours.length)
	return colours[rand]
}

// Generate random colours
function generateColours(nColours) {
	var colours = []

	for(i = 0; i < nColours; i++) {
		colours.push(randomColour())
	}

	return colours
}

// Generate a random colour
function randomColour() {
	var red = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)

	return "rgb(" + red + ", " + green + ", " + blue + ")"
}

// Set squares to generated colours
function setColours() {
	for(var i = 0; i < colours.length; i++) {
		squares[i].style.backgroundColor = colours[i]
	}
}

// Change square visibility when changing modes
function showSquares() {
	for(var i = 0; i < squares.length; i++) {
		if(colours[i]){
			squares[i].style.display = "block"
		}
		else {
			squares[i].style.display = "none"
		}
	}
}


// Reset the game upon changing modes or trying again
function resetBoard() {
	banner.style.backgroundColor = "#428bca"	
	msg.textContent = ""
	pickedColour = pickColour()
	colourDisplay.textContent = pickedColour
	reset.textContent = "New Colours"
}