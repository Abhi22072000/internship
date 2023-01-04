const express = require('express');
const parser = require('body-parser');
const bodyparser=parser.json();
const route = express.Router();
//const controller = require('./controller')
const create_user=require('./controller/create_user')
const getall_user=require('./controller/getall_user')
const selectby_firstname=require('./controller/searchby_firstname')
//route.get('/get',controller.get);
route.post('/create_user',bodyparser,create_user.post);
route.get('/getall_user',getall_user.get);
route.get('/searchby_firstname',selectby_firstname.get)
//route.post('/post',controller.post);
//route.put('/put',controller.put);
//route.delete('/delete',controller.delete);
module.exports = route;