document.addEventListener('deviceready', onDeviceReady, false);
var watchID;
var step = 20;
var aWidth;
var aHeight;
function onDeviceReady() {
	aHeight = document.getElementById("start").clientHeight;
	aWidth = document.getElementById("start").clientWidth;
	document.getElementById("start").onclick = function(){
		watchID = navigator.accelerometer.watchAcceleration(accelerometerSuccess,
									accelerometerError,
									{ frequency: 50 });
	}
	document.getElementById("stop").onclick = function(){
		navigator.accelerometer.clearWatch(watchID);
	}
}
function accelerometerSuccess(acceleration) {
	var p = document.getElementById("plan");
	p.style.left = aWidth/2 - acceleration.x * step + "px";
	p.style.top = 180 + acceleration.y * step + "px";
}

function accelerometerError() {

}