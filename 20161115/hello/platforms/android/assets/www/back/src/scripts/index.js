var str = require("./templates/index.string");
var IScroll = require("./libs/iscroll-probe.js");

var body = document.body;
body.innerHTML = str + body.innerHTML;

window.onload = function(){
	var myScroll = new IScroll('#main-scroll',{
		mouseWheel:true,
		hScrollbar:false,
		vScrollbar:false,
	});
}