document.addEventListener('deviceready',onDeviceReady, false);
var photoPath;
function onDeviceReady(){
    document.getElementById("takephoto").addEventListener("touchend",function(){
        navigator.camera.getPicture(onSuccess,onFail,{
            destinationType:Camera.DestinationType.FILE_URI,
            sourceType:Camera.PictureSourceType.CAMERA,
            correctOrientation:true,
            cameraDirection:0   //1 前置  0后置
        });
    });
    function onSuccess(path){
        photoPath = path;
        document.getElementById("photo").style.backgroundImage = "url(" + path + ")";
        document.getElementById("photo").style.backgroundSize = "cover";
    } 

    function onFail(){
        alert("失败");
    }

   document.getElementById("upload").addEventListener("touchend",function(){
        fileURI = photoPath;
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = "img" + (new Date().getTime()) + ".jpg";
        options.mimeType = "text/plain";
        
        var params = new Object();
        params.value1 = "test";
        params.value2 = "param";
        
        options.params = params;
        
        var ft = new FileTransfer();
        ft.upload(fileURI,"http://10.7.163.51/upload.php",win,fail,options);
        
        function win(){
            alert("上传成功");
        }
        
        function fail(error){
            alert(error.code);
        }
    });
}