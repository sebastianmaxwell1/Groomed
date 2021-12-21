// // const mongoose = require('mongoose')
// // const dotenv = require('dotenv')


// // dotenv.config()

// // const CommentsSchema = new mongoose.Schema({
// //   author: { type: String },
// //   text: {type: String },
// // }, { timestamps: true });


// // const Comment = mongoose.model('Comment', CommentsSchema);

// // exports.Comment = Comment

// const Joi = require("joi");
// const mongoose = require("mongoose");
// const { replySchema } = require('./reply');

// const commentSchema = new mongoose.Schema({
//     videoID:{ type: String, required:true },
//     text: { type: String, required: true },
//     likes: { type: Number, default: 0 },
//     dislikes: { type: Number, default: 0 },
//     replies: [{ type: replySchema }],
//     timestamp: { type: Date, default: Date.now() }
// });

// function validateComment(comment) {
//     const schema = Joi.object({
//       videoID: Joi.string().min(1).max(255).required(),
//       text: Joi.string().min(1).max(255).required(),
//       likes: Joi.number(),
//       dislikes: Joi.number(),
//       replies: Joi.array(),
//     });
//     return schema.validate(comment);
//   }

// const Comment = mongoose.model("Comment", commentSchema);

// module.exports.Comment = Comment;
// module.exports.validateComment = validateComment;
