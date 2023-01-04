const express = require('express');
const app = express();
const route=require("./router");
app.use('/',route);
app.use(express.json());
app.listen(8080);