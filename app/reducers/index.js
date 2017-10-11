/*
* @Author: ASUS
* @Date:   2017-10-10 10:05:59
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-11 13:54:45
*/
import {combineReducers} from 'redux'
import userinfo from './userinfo'
import tabPage from './default'
export default combineReducers({
	userinfo,
	tabPage
})