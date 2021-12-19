const connectDB = require('./connect/mongoConnect')
const express = require('express');
const app = express();
const cors = require('cors')


const users = require('./routes/users')
const auth = require('./routes/auth')
// const articles = require('./routes/articleRoutes')



connectDB();

app.use(express.json());

app.use(cors())
app.use(express.json())

app.use('/api/users', users)
app.use('/api/auth', auth)
// require('./routes/articleRoutes')(app);
// app.use('./routes/articleRouts', articles);


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});