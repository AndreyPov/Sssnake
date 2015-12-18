//init buttons to move snake
var BUTTON_LEFT = 37;
var BUTTON_RIGHT = 39;
var BUTTON_UP = 38;
var BUTTON_DOWN = 40;

var SPEED = 300; //the speed of a snake

function bornSnake(){

$('.field').html("");
	for (var row = 0; row < 30; row++) {
		for (var column = 0; column < 30; column++) {
		$(".field").append("<div class=cell id=cell_"+row+"_"+column+"></div>");
		}
	}
		//create the 1st variant of snake
		$("#cell_3_10").addClass("snakeCell"); 
		$("#cell_3_11").addClass("snakeCell");
		$("#cell_3_12").addClass("snakeCell");
}
bornSnake(); //create field with a snake on it


function everyMove()
{

}


function food()
{

}

$(document).keydown(function(e){ //on KeyPressed
	switch(e.keyCode)	{
		case BUTTON_LEFT:   //? 
		case BUTTON_RIGHT:  //?
		case BUTTON_UP: 	//?
		case BUTTON_DOWN:   //? 
	}
});