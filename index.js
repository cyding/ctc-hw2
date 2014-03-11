$(document).ready(function(){ 
 //INSERT CODE HERE

 //QUESTION 1
 function Dog () {
 	//this.bark = function() {
 	//	return 'woof';
 	//};
 }

 function ShibaInu () {
 	Dog.call(this);
 }

 Dog.prototype.bark = function() {
 		return 'woof';
 }
 ShibaInu.prototype = new Dog();
 ShibaInu.prototype.constructor = ShibaInu;
 ShibaInu.prototype.bark = function() {
 	return 'much wow very javascript';
};

var dog = new Dog();
dog.bark();
var shibby = new ShibaInu();
shibby.bark();

 //QUESTION 3


$( "#task3" ).click(function() {
  $(".secondheading").html("Turtles are the best!!!");
  //$(".secondheading").text( htmlString );
  $(".secondheading").css( "color", "turquoise" );
});


 //QUESTION 4

$( "#task4" ).click(function() {
  $("#hipcat").css("-webkit-filter", "blur(3px) hue-rotate(270deg)");
  //$("#hipcat").css("-moz-filter", "blur(3px) hue-rotate(270deg)");

});


 //QUESTION 5

$( ".button" ).click(function() {
  $(".spincar").css("-webkit-animation-play-state", "running");

});


 //QUESTION 6

$(".nyancat").css("left", "100px");
$(".nyancat").animate({"left": "1000px"}, 5000);
$(".rainbows").animate({"width" : "1000px"}, 5000);

});