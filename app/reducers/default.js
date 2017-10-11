/*
* @Author: ASUS
* @Date:   2017-10-11 13:50:51
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-11 13:53:33
*/
import * as actionTypes from '../constants/default.js'

const initialState = {}

export default function tabPage (state = initialState,action){
	switch(action.type){
		case actionTypes.DEFAULT_PAGE:
			return action.data
		default:
			return state
	}
}