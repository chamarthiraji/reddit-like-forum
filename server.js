const express = require('express');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require("body-parser");

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use('/posts', posts);

mongoose.connect('mongodb://localhost/reddit');
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
