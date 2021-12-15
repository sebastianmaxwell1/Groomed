const connectDB = require('./connect/mongoConnect')
const express = require('express');
const app = express();
const cors = require('cors')


const users = require('./routes/users')


connectDB();

app.use(express.json());

app.use(cors())
app.use(express.json())

app.use('/api/users', users)

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});