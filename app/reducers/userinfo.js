/*
* @Author: ASUS
* @Date:   2017-10-10 10:06:15
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 10:09:55
*/
import * as actionTypes from '../constants/userinfo'

const initialState = {}

export default function userinfo (state = initialState,action){
	switch(action.type){
		case actionTypes.USERINFO_UPDATE:
			return action.data
		default:
			return state
	}
}