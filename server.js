// Standard server.js information to be included, when the server is running, it will display `listening on port`


const express = require("express");
// const cors = require('cors')
require('dotenv').config();
const dbConnect = require("./dbConnect");
dbConnect.connectMysql();

const app = express();
const port = process.env.PORT || 8080;

// app.use(cors())
app.use(express.json());
app.use(express.static(__dirname + '/public'));

let postRoutes = require('./routes/postRoutes')
app.use('/api/posts', postRoutes)

app.listen(port,()=>{
  console.log("Listening on port ", port);
});