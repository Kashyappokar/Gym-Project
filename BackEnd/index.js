const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/userRoutes')
require('./Db')
const app = express();

app.use(bodyParser.json());
app.use('/user',userRoutes);
app.use(express.static('public'))


const port = 8000;
app.listen(port,() => console.log(`Server is working on port ${port}`))