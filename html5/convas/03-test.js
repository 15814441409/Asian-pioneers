/*
* @Author: Administrator
* @Date:   2017-06-05 13:22:47
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-05 13:25:49
*/

'use strict';
// 接受消息
self.onmessage=function(ev){
	ev=ev||window.event;
	var str ='hellow' +ev.data;
	docuemnt.title(str);

	// 发消息
	self.postMessage(str);

}	