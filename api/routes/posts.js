const express = require('express')
const router = express.Router();
var bodyParser = require("body-parser");


const Post = require('../models/post');

router.get('/:subreddit', (req, res) => {
    //	console.log("router get",req.params);
    var subredditId = req.params.subreddit.toLowerCase();
	subredditId = subredditId.replace(/ /g, '');

	Post.find({
		subredditId: subredditId
	}, (err, results) => {
	//	console.log("results",results);
		res.json(results);
	});
});

router.get('/comments/:id', (req, res) => {
//  console.log("router comments get",req.params);
    var id = req.params.id;
    id = id.replace(/ /g, '');

    Post.find({
        _id: id
    }, (err, results) => {
    console.log("results",results);
        res.json(results);
    });
});

router.post('/postData', function(req,res) {
	
	//console.log("post data",req);
	//console.log("post data",req.body);
	//console.log("post data body",JSON.stringify(req.body));
	//console.log("post data params",JSON.stringify(req.params));
	var author = req.body.author;
	var content = req.body.content;
	var subredditId= req.body.subredditId;
	var title = req.body.title;

	Post.create({
        author : author,
        content : content,
        subredditId : subredditId,
        title : title
    	}, function (err, Post) {
          if (err) {
              res.send("There was a problem adding the information to the database.");
          } else {
              console.log('POST created  ' +Post);
          }
	});
});

router.post('/comments/:id', (req,res) => {
    const id= req.params.id;
    Post.findById(id, (err, post) => {

         if(err) {
             return res.status(500).json({
                 title: `No post was found by id: ${id}`,
                 error: err
             })
         }
         else {
             post.comments.push(req.body.value);
             console.log(post)
             post.save(function (err, result) {
                 if(err) {
                     return res.status(500).json({
                         title: 'An error occurred when uploading a comment',
                         error: err
                     })
                 }

                 res.json(result);
             });
         }
     });

})

module.exports = router;
