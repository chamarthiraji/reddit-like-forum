const mongoose = require('mongoose');

const Post = new mongoose.Schema({
	author: String,
	comments: Array,
	content: String,
	subreddit: mongoose.Schema.Types.ObjectId,
	subredditId: String,
	title: String,

	created_at: Date,
	updated_at: Date
});

module.exports = mongoose.model('post', Post);
