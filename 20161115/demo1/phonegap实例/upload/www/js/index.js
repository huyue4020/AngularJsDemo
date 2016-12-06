document.addEventListener('deviceready', onDeviceReady, false);
var photoPath;
function onDeviceReady() {
	document.getElementById("takephoto").addEventListener("touchend" ,function(){
		navigator.camera.getPicture(onSuccess, onFail,
		{ 
		    destinationType: Camera.DestinationType.FILE_URI,
		    sourceType: Camera.PictureSourceType.CAMERA,
		    correctOrientation: true,
		    cameraDirection: 0
		});
	});
	
	function onSuccess(path) {
		photoPath = path;
		document.getElementById("photo").style.backgroundImage = "url(" + path + ")";
		document.getElementById("photo").style.backgroundSize = "cover";
	}
	function onFail() {

	}
	
	document.getElementById("upload").addEventListener("touchend" ,function(){
		fileURI = photoPath;
		var win = function() { 
			alert("上传成功！");
		}  

		var fail = function(error) { 
		    alert(error.code); 
		}  

		var options = new FileUploadOptions(); 
		options.fileKey="file"; 
		options.fileName="img" + (new Date().getTime()) + ".jpg"; 
		options.mimeType="text/plain";  

		var params = new Object(); 
		params.value1 = "test"; 
		params.value2 = "param";  

		options.params = params;  

		var ft = new FileTransfer(); 
		ft.upload(fileURI, "http://192.168.10.80/upload.php", win, fail, options);
	});
}


