document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.getElementById("takephoto").onclick = function(){
		navigator.camera.getPicture(onSuccess, onFail,
		{ 
		    destinationType: Camera.DestinationType.FILE_URI,
		    sourceType: Camera.PictureSourceType.CAMERA,
		    correctOrientation: true,
		    cameraDirection: 0
		});
	}
}
function onSuccess(path) {
	document.getElementById("photo").style.backgroundImage = "url(" + path + ")";
	document.getElementById("photo").style.backgroundSize = "cover";
}

function onFail() {

}