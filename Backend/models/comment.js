const mongoose = require('mongoose')
const dotenv = require('dotenv')


dotenv.config()

const CommentsSchema = new mongoose.Schema({
  author: { type: String },
  text: {type: String },
}, { timestamps: true });


const Comment = mongoose.model('Comment', CommentsSchema);

exports.Comment = Comment

// export default mongoose.model('Comment', CommentsSchema);