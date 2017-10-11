/*
* @Author: ASUS
* @Date:   2017-10-11 13:56:36
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-11 13:57:24
*/
import * as actionTypes from '../constants/default.js'

export function update(data){
	return {
		type:actionTypes.DEFAULT_PAGE,
		data
	}
}