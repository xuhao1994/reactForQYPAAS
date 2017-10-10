/*
* @Author: ASUS
* @Date:   2017-10-10 10:17:01
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 10:23:39
*/
import { createStore } from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState){
	const store = createStore(rootReducer,initialState,
		window.devToolsExtension?window.devToolsExtension():undefined
	)
	return store
}