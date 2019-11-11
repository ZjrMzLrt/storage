const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const uuid = require('uuid/v4');
let unid = '';
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  next();
});
app.listen(8800,(req,res) => {
	console.log('服务器启动')
})

app.post('/drop',(req,res) => {
	unid = '';
	res.send({
		msg: '退出成功',
		code: 1
	})
})

app.post('/islogin',(req,res) => {//是否登录
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			if(!unid){
				res.send({
					islogin: false
				})
			}else{
				res.send({
					islogin: unid
				})
			}
		}
	});
})

app.post('/login',(req,res) => {//登录
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			if(!getUser(a,req.body.user)){
				res.send({
					msg: '该用户不存在',
					code: 0
				})
			}else{
				a.arr.forEach(item => {
					if(req.body.user == item.user){
						if(req.body.pass == item.pass){
							unid = uuid().replace(/\-/g,'');
							res.send({
								msg: '登陆成功',
								code: 1
							})
						}else{
							res.send({
								msg: '登陆失败',
								code: 0
							})
						}
					}
				})
			}
		}
	});
})

app.post('/join',(req,res) => {//注册
	if(!req.body.user){
		res.send({
			msg: '注册失败',
			code: 0
		})
		return;
	}
	if(!req.body.pass){
		res.send({
			msg: '注册失败',
			code: 0
		})
		return;
	}
	 fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			if(!getUser(a,req.body.user)){
				a.arr.push({
					user: req.body.user,
					pass: req.body.pass
				})
				fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
					if(err){
						console.log('写入失败');
					}else{
						res.send({
							msg: '亲爱的'+req.body.user+'您以注册成功',
							code: 1
						})
						return;
					}
				});
			}else{
				res.send({
					msg: '该用户已存在',
					code: 0
				})
			}
		}
	}); 
})

app.post('/index',(req,res) => {//首页
	res.send({
		banner: [
			'https://p0.meituan.net/dpmerchantpic/5518871de694e9100c27ef9d511d5b931482312.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
			'https://p0.meituan.net/dpmerchantpic/2ce1306b59907fa1f0ade14a0fcbefca1177476.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
			'http://p0.meituan.net/wedding/62d00696fda0f02b49d929b0825191c8588805.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
			'https://p0.meituan.net/dpmerchantpic/0f776c0dd56ed2d0113426309648dba11762409.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20',
			'https://p0.meituan.net/dpmerchantpic/792941e282b03084ccff4216cddcfc401334173.jpg%40watermark%3D1%26%26r%3D1%26p%3D9%26x%3D2%26y%3D2%26relative%3D1%26o%3D20'
		],
		address: {
			top: '蔚蓝云朵艺术学校（富田校区）',
			bottom: '郑州市管城回族区灵隐路1号映月路社区B1层'
		}
	})
})

app.post('/getexper',(req,res) => {//获取体验课
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			res.send({
				data: a.exper
			})
		}
	});
})

app.post('/addexper',(req,res) => {//添加体验课
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let id = uuid().replace(/\-/g,'');
			let obj = {
				id,
				title: req.body.title,
				time: req.body.time,
				price: req.body.price,
				oldprice: req.body.oldprice,
				people: req.body.people
			}
			a.exper.push(obj);
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '添加成功',
						code: 1,
						id
					})
				}
			});
		}
	});
})

app.post('/setexper',(req,res) => {//修改体验课
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let obj = {
				id: req.body.id,
				title: req.body.title,
				time: req.body.time,
				price: req.body.price,
				oldprice: req.body.oldprice,
				people: req.body.people
			}
			for(let i = 0;i<a.exper.length;i++){
				if(a.exper[i].id == req.body.id){
					a.exper[i] = obj;
				}
			}
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '修改成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/removeexper',(req,res) => {//删除体验课
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let arr = [];
			for(let i = 0;i < a.exper.length;i++){
				if(a.exper[i].id != req.body.id){
					arr.push(a.exper[i]);
				}
			}
			a.exper = arr;
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '删除成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/getcourse',(req,res) => {//获取精品课程
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			res.send({
				experbtn: [
					{
						txt: '全部',
						id: 0
					},{
						txt: '声乐',
						id: 1
					},{
						txt: '钢琴',
						id: 1
					},{
						txt: '舞蹈',
						id: 1
					},{
						txt: '美术',
						id: 1
					}
				],
				exper: a.course
			})
		}
	})
})

app.post('/addcourse',(req,res) => {//添加精品课程
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let id = uuid().replace(/\-/g,'');
			let obj = {
				id,
				title: req.body.title,
				time: req.body.time,
				price: req.body.price,
				oldprice: req.body.oldprice,
				people: req.body.people
			}
			a.course.push(obj);
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '添加成功',
						code: 1,
						id
					})
				}
			});
		}
	});
})

app.post('/setcourse',(req,res) => {//修改精品课程
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let obj = {
				id: req.body.id,
				title: req.body.title,
				time: req.body.time,
				price: req.body.price,
				oldprice: req.body.oldprice,
				people: req.body.people
			}
			for(let i = 0;i<a.course.length;i++){
				if(a.course[i].id == req.body.id){
					a.course[i] = obj;
				}
			}
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '修改成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/removecourse',(req,res) => {//删除精品课程
	if(!req.body.unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	if(req.body.unid != unid){
		res.send({
			code: 0,
			msg: '对不起，您没有权限访问'
		})
		return;
	}
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let arr = [];
			for(let i = 0;i < a.course.length;i++){
				if(a.course[i].id != req.body.id){
					arr.push(a.course[i]);
				}
			}
			a.course = arr;
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '删除成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/getress',(req,res) => {//获取收货地址
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			res.send({
				ress: a.ress
			})
		}
	});
})

app.post('/address',(req,res) => {//添加收货地址
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let id = uuid().replace(/\-/g,'');
			let name = req.body.name;
			if(req.body.sex == 0){
				name+='先生';
			}else{
				name+='女士';
			}
			let obj = {
				id,
				name,
				pone: req.body.pone,
				ress1: req.body.ress1[0],
				ress2: req.body.ress2[0],
				ress3: req.body.ress3[0],
				ress4: req.body.ress4[0],
				sex: req.body.sex,
				res: req.body.res
			}
			a.ress.push(obj);
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '添加成功',
						code: 1,
						id
					})
				}
			});
		}
	});
})

app.post('/setress',(req,res) => {//修改收货地址
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let obj = {
				id: req.body.id,
				name: req.body.name,
				pone: req.body.pone,
				ress1: req.body.ress1[0],
				ress2: req.body.ress2[0],
				ress3: req.body.ress3[0],
				ress4: req.body.ress4[0],
				sex: req.body.sex,
				res: req.body.res
			}
			for(let i = 0;i<a.ress.length;i++){
				if(a.ress[i].id == req.body.id){
					a.ress[i] = obj;
				}
			}
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '修改成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/removeress',(req,res) => {//删除收货地址
	fs.readFile('./data.json','utf-8',(err,data) => {
		if(err){
			console.log('读取失败');
		}else{
			let a= JSON.parse(data);
			let arr = [];
			for(let i = 0;i < a.ress.length;i++){
				if(a.ress[i].id != req.body.id){
					arr.push(a.ress[i]);
				}
			}
			a.ress = arr;
			fs.writeFile('./data.json',JSON.stringify(a),(err,data) =>{
				if(err){
					console.log('写入失败');
				}else{
					res.send({
						msg: '删除成功',
						code: 1
					})
				}
			});
		}
	});
})

app.post('/gettea',(req,res) => {//获取授课老师
	res.send({
		ress: [
			{
				img: '/static/img/首页/授课老师页/1-3_03.jpg',
				name: '蔚蓝云朵艺术学校-胡苏',
				career: '总校长',
				pic: "/static/img/首页/授课老师页/1.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '段新宇',
				career: '民族舞讲师',
				pic: "/static/img/首页/授课老师页/2.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '樊鑫敏',
				career: '声乐讲师',
				pic: "/static/img/首页/授课老师页/3.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '胡颖',
				career: '古筝讲师',
				pic: "/static/img/首页/授课老师页/4.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '李龙粥',
				career: '美术讲师',
				pic: "/static/img/首页/授课老师页/5.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '申慧莹',
				career: '民族舞讲师',
				pic: "/static/img/首页/授课老师页/6.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '王禧歌',
				career: '美术讲师',
				pic: "/static/img/首页/授课老师页/7.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '张志培',
				career: '钢琴讲师',
				pic: "/static/img/首页/授课老师页/8.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '赵梓萌',
				career: '声乐讲师',
				pic: "/static/img/首页/授课老师页/9.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '周梦露',
				career: '舞蹈讲师',
				pic: "/static/img/首页/授课老师页/10.jpg"
			},{
				img: '/static/img/首页/授课老师页/1-3_07.jpg',
				name: '朱鸿涛',
				career: '吉他讲师',
				pic: "/static/img/首页/授课老师页/11.jpg"
			}
		]
	})
})

function getUser(a,user){
	return a.arr.some(item => {
		return item.user == user;
	})
}