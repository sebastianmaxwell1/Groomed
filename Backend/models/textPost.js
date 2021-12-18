const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Comment = require('./comment');

const TextPostSchema = new Schema({
	title: String, 
	content: String, 
	thumbnail_image_url: String, 
	votes: Number,
	comments: [Comment.Schema] 
});

const TextPost = mongoose.model('TextPost', TextPostSchema);

module.exports = TextPost;