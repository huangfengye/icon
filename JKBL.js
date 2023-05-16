/******************************
[rewrite_local]
^https?:\/\/api\.mnks\.cn\/v1\/other url script-response-body https://raw.githubusercontent.com/huangfengye/icon/main/JKBL.js

[mitm] 
hostname = api.mnks.cn

*******************************/

var body = $response.body;
var url  = $request.url;
var objc = JSON.parse(body);

const mumu ='/appevent.php';

if (url. indexOf (mumu) != -1){
	objc = {
	  "result" : "success",
	  "resume" : "ok,已计入缓存",
	  "data" : {
	  
	  },
	  "ecode" : "200",
	  "datetime" : "2023-05-16 23:01:49",  
	  "_local_" : "116"  
};
	body = JSON.stringify(objc);
}
$done({ 
    body 
});
