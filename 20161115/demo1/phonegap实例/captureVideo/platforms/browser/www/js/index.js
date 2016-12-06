document.addEventListener('deviceready', onDeviceReady, false);
var videoPath;
function onDeviceReady() {
	document.getElementById("takeVideo").addEventListener("touchend" ,function(){
		var options = { limit: 1 };
		navigator.device.capture.captureVideo(captureSuccess, captureError, options);
	});
	document.getElementById("upload").addEventListener("touchend" ,function(){
		fileURI = videoPath;
		alert(fileURI);
		var win = function(r) { 
			alert("上传成功！");
		    console.log("Code = " + r.responseCode); 
		    console.log("Response = " + r.response); 
		    console.log("Sent = " + r.bytesSent); 
		}  

		var fail = function(error) { 
		    alert("An error has occurred: Code = " = error.code); 
		}  

		var options = new FileUploadOptions(); 
		options.fileKey="file"; 
		options.fileName=fileURI.substr("img" + (new Date().getTime()) + fileURI.substr(fileURI.indexOf("."))); 
		options.mimeType="text/plain";  

		var params = new Object(); 
		params.value1 = "test"; 
		params.value2 = "param";  

		options.params = params;  

		var ft = new FileTransfer(); 
		ft.upload(fileURI, "http://10.7.163.51/upload.php", win, fail, options);
	});
}
function captureSuccess(mediaFiles) {
   	if(mediaFiles.length > 0) {
   		videoPath = mediaFiles[0].fullPath;
	   	document.getElementById("videoArea").src = mediaFiles[0].fullPath;
	}
}

function captureError() {
	alert("captureError");
}