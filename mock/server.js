/*
* @Author: ASUS
* @Date:   2017-09-30 09:44:47
* @Last Modified by:   ASUS
* @Last Modified time: 2017-10-09 10:24:30
*/
var app = require('koa')();
var router = require('koa-router')();

var productListData = require('./product/productList.js');
router.get('/api/productList',function *(next){
	this.body = productListData
});

var jgList = require('./jg/jgList.js');
router.get('/api/getJgList',function *(next){
	this.body = jgList
});


app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);