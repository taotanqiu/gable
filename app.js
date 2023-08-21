const express = require("express")
const app = express()
app.use(express.static("public"))

var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/layout');

 
if (process.env.NODE_ENV !== 'production') {
require('dotenv').config()
}




const mongoose = require("mongoose")
mongoose.connect(process.env.mongodb)
  .then(() => console.log('数据库连上了!'));


const indexRouter = require("./route/index")
app.use("/",indexRouter)


const port = process.env.PORT || 5000

app.listen(process.env.PORT || 5000,console.log(5000,"服务器启动了")
)