/*
* @Author: ASUS
* @Date:   2017-09-30 09:44:47
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-10 13:55:09
*/
var app = require('koa')();
var router = require('koa-router')();

//套餐列表
var productListData = require('./product/productList.js');
router.get('/api/productList/:city/:page',function *(next){
	const params = this.params
	const paramsCity = params.city
	const paramsPage = params.page
	console.log('当前城市:'+paramsCity)
	console.log('当前页数:'+paramsPage)
	if(paramsPage>4){
		productListData.hasMore = false
	}else{
		productListData.hasMore = true
	}
	this.body = productListData
});

var jgList = require('./jg/jgList.js');
router.get('/api/getJgList',function *(next){
	this.body = jgList
});


app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);