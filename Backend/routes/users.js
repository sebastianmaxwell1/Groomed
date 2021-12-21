const { User, validateUser } = require('../models/user')
const { UserInfo, validate } = require('../models/userInfo')
const { Comment } = require('../models/user')

const bcrypt = require('bcrypt')
const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')

const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

dotenv.config()

// ! add new user
router.post('/register', async (req, res) => {
  try {
    const { error } = validateUser(req.body)

    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send('User already registered.')

    const salt = await bcrypt.genSalt(10)
    user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, salt),
    })

    await user.save()

    const token = user.generateAuthToken()
    // const token = jwt.sign({ _id: user._id, name: user.name }, process.env.JWT);
       return res
       .header('x-auth-token', token)
       .header('access-control-expose-headers', 'x-auth-token')
       .send({ _id: user._id, name: user.name, email: user.email });

    // return res.send({ _id: user._id, name: user.name, email: user.email })
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
}) 


// get ALL users reqest
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    return res.send(users)
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
})

// get single user request
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) {
    return res.status(400).send(`The user with id "${req.params.id}" does not exist.`)
    }
  
    return res.send(user)
  } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`)
  }
})


router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id)

    if (!user) {
      return res.status(400).send(`
      The user with the id: "${req.params.id}" does not exist.
      `)
    }

    return res.send(user)
  } catch (ex) {
    return res.status(500).send(`Internal Server Error ${ex}`)
  }
})


///////Comments///////

// router.get('/comments', (req, res) => {
//   Comment.find((err, comments) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: comments });
//   });
// });

// router.post('/comments', (req, res) => {
//   const comment = new Comment();
//   const { author, text } = req.body;
//   if (!author || !text) {

//     return res.json({
//       success: false,
//       error: 'You must provide an author and comment'
//     });
//   }
//   comment.author = author;
//   comment.text = text;
//   comment.save(err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.put('/comments/:commentId', (req, res) => {
//   console.log(req.params);
//   const { commentId } = req.params;
//   if (!commentId) {
//     return res.json({ success: false, error: 'No comment id provided' });
//   }
//   Comment.findById(commentId, (error, comment) => {
//     if (error) return res.json({ success: false, error });
//     const { author, text } = req.body;
//     if (author) comment.author = author;
//     if (text) comment.text = text;
//     comment.save(error => {
//       if (error) return res.json({ success: false, error });
//       return res.json({ success: true });
//     });
//   });
// });

// router.delete('/comments/:commentId', (req, res) => {
//   const { commentId } = req.params;
//   if (!commentId) {
//     return res.json({ success: false, error: 'No comment id provided' });
//   }
//   Comment.remove({ _id: commentId }, (error, comment) => {
//     if (error) return res.json({ success: false, error });
//     return res.json({ success: true });
//   });
// });


module.exports = router
