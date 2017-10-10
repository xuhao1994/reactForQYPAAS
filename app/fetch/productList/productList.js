/*
* @Author: ASUS
* @Date:   2017-09-30 10:08:27
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 13:22:07
*/
import {get} from '../get'

export function getProListData(city,page){
	const result = get('/api/productList/'+encodeURIComponent(city)+'/'+page)
	return result
}