const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require("body-parser");

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;
var mongoURI = process.env.MONGODB_URI || "mongodb://localhost/reddit";


app.use(express.static('public'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/posts', posts);
//mongoose.connect('mongodb://heroku_q6dxjtf3:jdbs3ma67kv6mt1ie7umfh3i0a@ds111549.mlab.com:11549/heroku_q6dxjtf3');
//mongoose.connect('mongodb://localhost/reddit');
mongoose.connect(mongoURI);
var db = mongoose.connection;
//Show any mongoose errors
db.on("error",function(error){
	console.log("Mongoose Error: ",error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
