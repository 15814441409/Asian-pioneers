/*
* @Author: Administrator
* @Date:   2017-06-05 16:01:06
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-05 16:01:35
*/

'use strict';
function getStyle(obj,arr){
	if(window.getComputedStyle){
		return getComputedStyle(obj)[arr];
	}else{
		return obj.currentStyle[arr];
	}
}

function $(str){
	if(typeof str==='string'){
		return document.getElementById(str);
	}else if(typeof str==='function'){
		window.onload=str;
	}
}