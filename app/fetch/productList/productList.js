/*
* @Author: ASUS
* @Date:   2017-09-30 10:08:27
* @Last Modified by:   ASUS
* @Last Modified time: 2017-09-30 10:20:19
*/
import {get} from '../get'

export function getProListData(){
	const result = get('/api/productList')
	return result
}