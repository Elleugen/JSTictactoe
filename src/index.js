var row, column;
function customizeBoard() {
  row = document.getElementById("srow").value;
  column = document.getElementById("scolumn").value;
  if (row == 0 && column == 0){
    // alert("Fill board size first!");
  } else if(row == 0 || column == 0){
    // alert("Can't make board floor. Try again!");
  }
  else {
    alert("Board size :" + row + " x " + column);
  }
  
};

var floorSize = 9;

let render = "";
let floor = 0;
let i;
var floorId = ["one", "two", "three","four", "five","six","seven", "eight", "nine"]

// CUSTOMIZING FLOOR
// var floorId = [];
// for(let a = 0; a < row*column; a++){
//   floorId.push(i);
// }

for (i = 0; i < floorSize; i++) {
  floor++;
  floorId.push(i);
  render += `<li id="` + floorId[i] + `" name="` + i + `" class="btn span1" value="` + floorId[i] + `">+</li>`;
  console.log("floor " + floor + "th rendered");
  console.log("floorId = " + floorId[i]);
  // console.log("floor = " + document.getElementById(i));
}


document.getElementById("demo").innerHTML = render;

// OPEN
$(document).ready(function() {

  customizeBoard();

var x = "x"
var o = "o"
var count = 0;
var o_win = 0;
var x_win = 0;

$('#game li').click(function(){
  // console.log("floor = " + document.getElementById(floorId[i]).value);
  if (
    //MAKE THIS CONDITIONAL STATEMENT MORE EFFICIENT
    $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||
    $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') ||
    $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') ||
    $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') ||
    $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') ||
    $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') ||
    $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') ||
    $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o')

    // || $(1).hasClass('o') && $(2).hasClass('o') && $(3).hasClass('o')
    // $(count).hasClass('o') && $(count+1).hasClass('o') && $(count+2).hasClass('o')
  ){
  	alert('O has won the game. Start a new game')
  	$("#game li").text("+");
  	$("#game li").removeClass('disable')
  	$("#game li").removeClass('o')
  	$("#game li").removeClass('x')
  	$("#game li").removeClass('btn-primary')
  	$("#game li").removeClass('btn-info')
  }
  else if (
    //MAKE THIS CONDITIONAL STATEMENT MORE EFFICIENT
    $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x')||
    $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
    $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
    $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
    $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
    $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
    $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
    $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x')
  ){
    alert('X wins has won the game. Start a new game')
    $("#game li").text("+");
  	$("#game li").removeClass('disable')
  	$("#game li").removeClass('o')
  	$("#game li").removeClass('x')
  	$("#game li").removeClass('btn-primary')
  	$("#game li").removeClass('btn-info')	
  }
  else if (count == 9){
  	alert('Its a tie. It will restart.')
  	$("#game li").text("+");
  	$("#game li").removeClass('disable')
  	$("#game li").removeClass('o')
  	$("#game li").removeClass('x')
  	$("#game li").removeClass('btn-primary')
  	$("#game li").removeClass('btn-info')
  	count = 0
  }
  else if ($(this).hasClass('disable')){
    alert('Already selected')
  }
  else if (count%2 == 0){
	  count++
	  $(this).text(o)
      $(this).addClass('disable o btn-primary')
	    if (
        //MAKE THIS CONDITIONAL STATEMENT MORE EFFICIENT
        $("#one").hasClass('o') && $("#two").hasClass('o') && $("#three").hasClass('o') ||
        $("#four").hasClass('o') && $("#five").hasClass('o') && $("#six").hasClass('o') ||
        $("#seven").hasClass('o') && $("#eight").hasClass('o') && $("#nine").hasClass('o') ||
        $("#one").hasClass('o') && $("#four").hasClass('o') && $("#seven").hasClass('o') ||
        $("#two").hasClass('o') && $("#five").hasClass('o') && $("#eight").hasClass('o') || 
        $("#three").hasClass('o') && $("#six").hasClass('o') && $("#nine").hasClass('o') ||
        $("#one").hasClass('o') && $("#five").hasClass('o') && $("#nine").hasClass('o') ||
        $("#three").hasClass('o') && $("#five").hasClass('o') && $("#seven").hasClass('o'))
        {
          alert('O wins')
          count = 0
          o_win++
          $('#o_win').text(o_win)
        }
  }
    else  
  {
	  count++
    $(this).text(x)
    $(this).addClass('disable x btn-info')
	  if (
      //MAKE THIS CONDITIONAL STATEMENT MORE EFFICIENT
      $("#one").hasClass('x') && $("#two").hasClass('x') && $("#three").hasClass('x') ||
      $("#four").hasClass('x') && $("#five").hasClass('x') && $("#six").hasClass('x') ||
      $("#seven").hasClass('x') && $("#eight").hasClass('x') && $("#nine").hasClass('x') ||
      $("#one").hasClass('x') && $("#four").hasClass('x') && $("#seven").hasClass('x') ||
      $("#two").hasClass('x') && $("#five").hasClass('x') && $("#eight").hasClass('x') ||
      $("#three").hasClass('x') && $("#six").hasClass('x') && $("#nine").hasClass('x') ||
      $("#one").hasClass('x') && $("#five").hasClass('x') && $("#nine").hasClass('x') ||
      $("#three").hasClass('x') && $("#five").hasClass('x') && $("#seven").hasClass('x'))
    {
  	 alert('X wins')
  	 count = 0
  	 x_win++
  	 $('#x_win').text(x_win)
    }
  }
   });
    $("#reset").click(function () {
    $("#game li").text("+");
  	$("#game li").removeClass('disable')
  	$("#game li").removeClass('o')
  	$("#game li").removeClass('x')
  	$("#game li").removeClass('btn-primary')
  	$("#game li").removeClass('btn-info')
  	count = 0

  });

  
});
// CLOSE
