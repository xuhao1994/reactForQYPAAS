/*
* @Author: ASUS
* @Date:   2017-09-30 10:08:27
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-09 10:21:55
*/
import {get} from '../get'

export function getJgList(){
	const result = get('/api/getJgList')
	return result
}