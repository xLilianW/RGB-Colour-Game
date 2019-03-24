var colours = generateColours(6)

var squares = document.querySelectorAll(".square")
var pickedColour = pickColour()
var colourDisplay = document.querySelector("#pickedColour")
colourDisplay.textContent = pickedColour
var msg = document.querySelector("#msg")
var banner = document.querySelector(".banner")
var reset = document.querySelector("#reset")
var easy = document.querySelector("#easy")
var medium = document.querySelector("#medium")
var hard = document.querySelector("#hard")

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

easy.addEventListener("click", function() {
	this.classList.add("selected")
	medium.classList.remove("selected")
	hard.classList.remove("selected")
	colours = generateColours(3)

	resetBoard()
	showSquares()
	setColours()
})

medium.addEventListener("click", function() {
	this.classList.add("selected")
	easy.classList.remove("selected")
	hard.classList.remove("selected")
	colours = generateColours(6)

	resetBoard()
	showSquares()
	setColours()
})

hard.addEventListener("click", function() {
	this.classList.add("selected")
	medium.classList.remove("selected")
	easy.classList.remove("selected")
	colours = generateColours(9)

	resetBoard()
	showSquares()
	setColours()
})

reset.addEventListener("click", function(){
	colours = generateColours(colours.length)
	resetBoard()
	setColours()
})

function changeColours(colour) {
	for(var i = 0; i < colours.length; i++) {
		squares[i].style.backgroundColor = colour
	}

	banner.style.backgroundColor = colour
}

function pickColour() {
	var rand = Math.floor(Math.random() * colours.length)
	return colours[rand]
}

function generateColours(nColours) {
	var colours = []

	for(i = 0; i < nColours; i++) {
		colours.push(randomColour())
	}

	return colours
}

function randomColour() {
	var red = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)

	return "rgb(" + red + ", " + green + ", " + blue + ")"
}

function setColours() {
	for(var i = 0; i < colours.length; i++) {
		squares[i].style.backgroundColor = colours[i]
	}
}

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

function resetBoard() {
	banner.style.backgroundColor = "#428bca"	
	msg.textContent = ""
	pickedColour = pickColour()
	colourDisplay.textContent = pickedColour
}