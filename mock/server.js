/*
* @Author: ASUS
* @Date:   2017-09-30 09:44:47
* @Last Modified by:   ASUS
* @Last Modified time: 2017-09-30 09:58:34
*/
var app = require('koa')();
var router = require('koa-router')();

var productListData = require('./product/productList.js');
router.get('/api/productList',function *(next){
	this.body = productListData
});




app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);