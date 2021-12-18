const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const CommentSchema = new Schema({
	content: String,
	votes: Number
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;