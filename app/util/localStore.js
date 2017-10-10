/*
* @Author: ASUS
* @Date:   2017-10-10 10:38:28
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 10:43:44
*/
export default {
	getItem:function(key){
		let value
		try{
			value = localStorage.getItem(key)
		}catch(ex){
			if(__DEV__){
				console.error('localStorage.getItem报错',ex.message)
			}
		}finally{
			return value
		}
	},
	setItem:function(key,value){
		try{
			localStorage.setItem(key,value)
		}catch(ex){
			if(__DEV__){
				console.error('localStorage.setItem报错',ex.message)
			}
		}
	}
}