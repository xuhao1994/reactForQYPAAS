/*
* @Author: ASUS
* @Date:   2017-09-30 10:01:43
* @Last Modified by:   ASUS
* @Last Modified time: 2017-09-30 10:05:08
*/
import 'whatwg-fetch'
import 'es6-promise'

export function get(url){
	var result = fetch(url,{
		credentials:'include',
		headers:{
			'Accpet':'application/json,text/plain,*/*'
		}
	});
	return result;
}