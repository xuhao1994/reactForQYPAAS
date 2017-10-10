/*
* @Author: ASUS
* @Date:   2017-10-10 10:53:28
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 10:56:53
*/
import * as actionTypes from '../constants/userinfo.js'

export function update(data){
	return {
		type:actionTypes.USERINFO_UPDATE,
		data
	}
}
