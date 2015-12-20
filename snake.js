//init buttons to move snake
var BUTTON_LEFT = 37;
var BUTTON_RIGHT = 39;
var BUTTON_UP = 38;
var BUTTON_DOWN = 40;

var SPEED = 300; //the speed of a snake

var snake = ["3_12","3_11","3_10"];

var xyFood = "";

var direction = 1;

function bornSnake(){

$('.field').html("");
	
	var snake = ["3_12","3_11","3_10"];
	var xyFood = "";
	var direction = 1;

	for (var row = 0; row < 30; row++) {
		for (var column = 0; column < 30; column++) {
		$(".field").append("<div class=cell id=cell_"+row+"_"+column+"></div>");
		}
	}
		//create the 1st variant of snake
		$("#cell_3_10").addClass("snakeCell"); 
		$("#cell_3_11").addClass("snakeCell");
		$("#cell_3_12").addClass("snakeCell");
		food();
		setTimeout(function(){moveSnake()}, SPEED);
}
bornSnake(); //create field with a snake on it


function moveSnake()
{	
	var tail = snake.pop();	//takes the last element of a snake
	$("#cell_"+tail).removeClass("snakeCell");
	
	var lastCellSnake = snake[0];
	var arrayLastCellSnake= lastCellSnake.split("_");
	var row = parseInt(arrayLastCellSnake[0]);
	var column = parseInt(arrayLastCellSnake[1]);
	
	switch(direction){
		case 1: row=row+1; 		 break;
		case 2: column=column-1; break;
		case 3: row=row-1; 		 break;	
		case 4: column=column+1; break;
	}
	var newSnakeMove = row + "_" + column;
	
	if (newSnakeMove == xyFood)
	{
		snake.push(tail);
		$("#cell_"+tail).addClass("snakeCell");
		$("#cell_"+xyFood).removeClass("cellFood");
		food();
	}
	snake.unshift(newSnakeMove);

	if(column<0||row<0||column>29||row>29)
	{
		alert("Game Over. Click OK to start again in 5 seconds");
		bornSnake();
		return;
	}
	$("#cell_"+newSnakeMove).addClass("snakeCell");
	setTimeout(function(){moveSnake()}, SPEED);
}


function food() //add food on the field
{
	var rowFood = Math.floor(Math.random()*29);
	var columnFood = Math.floor(Math.random()*29);
	$("#cell_"+rowFood+"_"+columnFood).addClass("cellFood");
	xyFood = rowFood+"_"+columnFood;
}


$(document).keydown(function(e){ //on KeyPressed
	switch(e.keyCode)	{
		case BUTTON_LEFT:  direction = 2; break;//? 
		case BUTTON_RIGHT: direction = 4; break;	 //?
		case BUTTON_UP:    direction = 3; break;	//?
		case BUTTON_DOWN:  direction = 1; break;	 //? 
	}
});