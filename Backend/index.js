const connectDB = require('./connect/mongoConnect')
const express = require('express');
const app = express();
const cors = require('cors')


const users = require('./routes/users')
const auth = require('./routes/auth')

// const path = require('path');
// const http = require('http');
// const bodyParser = require('body-parser');
// const postsRouter = require('./routes/postsRouter');
// const commentsRouter = require('./routes/commentsRouter');
// const reactionsRouter = require('./routes/reactionsRouter');
// const authenticate = require('./authenticate');
// dotenv.config()




connectDB();

// app.use(bodyParser.json());

app.use(express.json());

app.use(cors())
app.use(express.json())

app.use('/api/users', users)
app.use('/api/auth', auth)

// app.use('/posts', postsRouter);
// app.use('/comments', commentsRouter);
// app.use('/reactions', reactionsRouter);


// app.use((req, res, next) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');
  
//   });



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});