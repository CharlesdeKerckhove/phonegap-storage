var key1 = "NameOne";
var value1 = "Chris";

window.localStorage.setItem(key1, value1);

var key2 = "NameTwo";
var value2 = "TJ";

window.localStorage.setItem(key2, value2);

var key3 = "NameThree";
var value3 = "Charlie";

window.localStorage.setItem(key3, value3);

var key4 = "NameFour";
var value4 = "Matt";

window.localStorage.setItem(key4, value4);

var key5 = "NameFive";
var value5 = "Gomez";

window.localStorage.setItem(key5, value5);


var value1 = window.localStorage.getItem(key1);

document.addEventListener("deviceready", onDeviceReady, false);
		

$(document).ready (function(){
    
    console.log ("ready");
    onDeviceReady();
});


	
function updateDisplay() {
    
    var anythingyoulike = window.localStorage.getItem(key3)
    
	$("#launched").text("I love: " + anythingyoulike);
	
}


// device APIs are available
//
    function onDeviceReady() {
	
	updateDisplay();
	    

    }