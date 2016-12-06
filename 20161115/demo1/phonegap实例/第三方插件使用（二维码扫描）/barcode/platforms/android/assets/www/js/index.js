var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        document.getElementById("barcode").addEventListener('click', function(){
        	alert("bacode start");
		   cordova.plugins.barcodeScanner.scan(
		      function (result) {
		          alert("We got a barcode\n" +
		                "Result: " + result.text + "\n" +
		                "Format: " + result.format + "\n" +
		                "Cancelled: " + result.cancelled);
		      }, 
		      function (error) {
		          alert("Scanning failed: " + error);
		      }
		   );
        }, false);
    }
};
