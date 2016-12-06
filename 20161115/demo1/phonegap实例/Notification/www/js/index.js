document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
	document.getElementById("alertBtn").onclick = function(){
		navigator.notification.alert("这是一条alert信息。", function() {alert("1");}, "标题", "按钮");
		alert("2");
	}
	document.getElementById("confirmBtn").onclick = function(){
		navigator.notification.confirm("这是一条comfirm信息。", function() {}, "标题", "按钮1,按钮2");
	}
	document.getElementById("beepBtn").onclick = function(){
		navigator.notification.beep(10);
	}
	document.getElementById("vibrateBtn").onclick = function(){
		navigator.notification.vibrate(3);
	}
}