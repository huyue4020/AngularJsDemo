<?php
  include 'WechatJssdk.class.php';
  $appid = "wxa15d68dbab8dc9a6";
  $appsecret = "33ce1d232a02e883de284f048afca39f";
  $jssdk = new WechatJssdk($appid,$appsecret);
  $signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>足球圈</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="/course-webapp/prd/styles/index@415c27f554e3b84f5a175416dd848480.css"/>
  <script>
      document.ontouchmove = function(e) {
          if (e.target.tagName.toUpperCase() !== 'IFRAME') {
              e.preventDefault();
          }
      };
  </script>
</head>
<body>
  <script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
  <script>
    wx.config({
      debug: false,
      appId: "<?php echo $signPackage['appId']; ?>",
      timestamp: '<?php echo $signPackage["timestamp"]; ?>',
      nonceStr: '<?php echo $signPackage["nonceStr"]; ?>',
      signature: '<?php echo $signPackage["signature"]; ?>',
      jsApiList: [
        // 所有要调用的 API 都要加到这个列表中
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'getNetworkType',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode'
      ]
    });
  </script>
  <script src="/course-webapp/prd/scripts/index@a06b3dc892d8941d82b467921fa4bec6.js"></script>
</body>
</html>
