const express = require('express');
const router = express.Router();
const textPostsController = require('../controllers/textPosts');
const commentsController = require('../controllers/comments');

//Post Routes
router.get('/api/posts', textPostsController.index);
router.post('/api/posts', textPostsController.create);
router.get('/api/posts/:post_id', textPostsController.show);
router.put('/api/posts/:post_id', textPostsController.update);
router.delete('/api/posts/:post_id', textPostsController.destroy);

//Comment Routes
router.post('/api/posts/:post_id/comments', commentsController.create);
router.put('/api/posts/:post_id/comments/:comment_id', commentsController.update);
router.delete('/api/posts/:post_id/comments/:comment_id', commentsController.destroy);

module.exports = router;