// Create a reference for the canvas
canvas = document.getElementById('myCanvas');

ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122) || (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}
		if(keyPressed >=48 && keyPressed<=57)
		{
			numberkey();
			document.getElementById("d2").innerHTML="You pressed Number Key";
			console.log("number key");
		}
		if(keyPressed >=37 && keyPressed<=40)
		{
			arrowkey();
			document.getElementById("d3").innerHTML="You pressed Arrow Key";
			console.log("arrow key");
		}
		if(keyPressed >=32 && keyPressed<=47)
		{
			specialkey();
			document.getElementById("d4").innerHTML="You pressed Special Key";
			console.log("special key");
		}
		if(keyPressed >=7 && keyPressed<=7)
		{
			otherkey();
			document.getElementById("d5").innerHTML="You pressed Symbol or Other Key";
			console.log("other key");
		}
		//write a code to check the type of key pressed
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
		
			numberkey();
			document.getElementById("d2").innerHTML="You pressed Number Key";
		
			arrowkey();
			document.getElementById("d3").innerHTML="You pressed Arrow Key";
		
			specialkey();
			document.getElementById("d4").innerHTML="You pressed Special Key";
		
			otherkey();
			document.getElementById("d5").innerHTML="You pressed Symbol or other key";
		}
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add();
	//upload respective image with the message. 
}
function numkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	