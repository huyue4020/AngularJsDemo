(function() {
	/*
	 * 全局变量
	 */
	var compassWatchID;						// 指南针监视用のID
	var degreeToRotate01 = "rotate(0deg)";	// 指南针旋转角度
	var degreeToRotate02 = "rotate(0deg)";	// 指北针的角度

	/*
	 * 現在の方位を取得
	 * コンパスは端末が向いている方向を感知するセンサー
	 * コンパスは方位を0から359.99の範囲で計測する
	 */
	getCurrentHeading = function() {
		navigator.compass.getCurrentHeading(currentHeadingSuccess, currentHeadingError);
	};

	/*
	 * 现在方位取得
	 */
	currentHeadingSuccess = function(res) {
		getHeadingSuccess(res, "currentHeadingSuccess");
	};

	/*
	 * 失败时callback
	 */
	currentHeadingError = function(e) {
		var dump = "现在方位取得失败了。\n";
		dump    += "code: " + e.code + "\n";
		document.getElementById("dumpAreaCompass").value = dump;
	};

	/*
	 * 每隔一定时间来取得
	 * frequency : 间隔时间 毫秒
	 */
	watchHeading = function() {
		var options = { frequency: 10 };
		compassWatchID = navigator.compass.watchHeading(watchHeadingSuccess, watchHeadingError, options);
	};

	/*
	 * 成功时callback
	 */
	watchHeadingSuccess = function(res) {
		getHeadingSuccess(res, "watchHeadingSuccess");
	};

	/*
	 * 失败时callback
	 */
	watchHeadingError = function(e) {
		var dump = "方位取得失败了。\n";
		dump    += "code: " + e.code + "\n";
		document.getElementById("dumpAreaCompass").value = dump;
	};

	/*
	 * 方位取得成功后的共通处理
	 */
	getHeadingSuccess = function(res) {
		var dump = "取得成功了\n";
		dump    += "磁北：" + res.magneticHeading + "\n";
		dump    += "真北：" + res.trueHeading     + "\n";
		dump    += "精度：" + res.headingAccuracy;
		document.getElementById("dumpAreaCompass").value = dump;
		document.getElementById("magneticNum").value = res.trueHeading;

		// 画像回转
		degreeToRotate01 = "rotate(-" + res.magneticHeading + "deg)";
		document.getElementById("compassPointer").style.MozTransform    = degreeToRotate01;
		document.getElementById("compassPointer").style.WebkitTransform = degreeToRotate01;
		document.getElementById("compassPointer").style.transform       = degreeToRotate01;

		// 真北回转
		degreeToRotate02 = "rotate(-" + res.trueHeading + "deg)";
		document.getElementById("compassTureNorth").style.MozTransform    = degreeToRotate02;
		document.getElementById("compassTureNorth").style.WebkitTransform = degreeToRotate02;
		document.getElementById("compassTureNorth").style.transform       = degreeToRotate02;
	};

	/*
	 * 监视停止
	 */
	clearWatchHeading = function() {
		navigator.compass.clearWatch(compassWatchID);
		alert("监视停止了。");
	};

	document.addEventListener("deviceready", function() {
		//「现在角度取得」按下处理
		document.getElementById("getHeadingBtn").addEventListener("click", getCurrentHeading, false);
		//「指南针启动」按下处理
		document.getElementById("watchHeadingBtn").addEventListener("click", watchHeading, false);
		//「指南针停止」按下处理
		document.getElementById("clearWatchBtn").addEventListener("click", clearWatchHeading, false);
	}, false);
})();
