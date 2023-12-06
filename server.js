// Standard server.js information to be included, when the server is running, it will display `listening on port`

const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Connect to MySQL
const dbConnect = require("./dbConnect");
dbConnect.connectMysql();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

// Import routes after connecting to the database
let postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

let usersyRoutes = require("./routes/usersyRoutes");
app.use("/api/usersy", usersyRoutes);

app.listen(port, () => {
  console.log("Listening on port ", port);
});
