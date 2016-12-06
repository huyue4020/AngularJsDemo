document.addEventListener('deviceready', onDeviceReady, false);
var positionG;
function onDeviceReady() {
	document.getElementById("getGPS").addEventListener("touchend" ,function(){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
	});
	document.getElementById("getAdd").addEventListener("touchend" ,getAddress);
}
function onSuccess(position) {
	positionG = position;
	var result = 'Latitude: ' + position.coords.latitude          + '\n' +
		'Longitude: '         + position.coords.longitude         + '\n' +
		'Altitude: '          + position.coords.altitude          + '\n' +
		'Accuracy: '          + position.coords.accuracy          + '\n' +
		'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
		'Heading: '           + position.coords.heading           + '\n' +
		'Speed: '             + position.coords.speed             + '\n' +
		'Timestamp: '         + new Date(position.timestamp)      + '\n';
	document.getElementById("output").innerText = result;
}

function onError(err) {
	alert("出错了");
}

function getAddress() {
	var point = new google.maps.LatLng(positionG.coords.latitude, positionG.coords.longitude);
	var address = "";
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({"location": point}, function (arr, status) {
	    if (status != google.maps.GeocoderStatus.OK) {
	        //console.log(status);
	    } else {
	        address = arr[0].formatted_address;
			console.log(address);
			document.getElementById("output").innerText += address;
	    }
	});
}