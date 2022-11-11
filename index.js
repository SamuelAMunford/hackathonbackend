const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv')
dotenv.config()

const app = express();


const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({limit:"30mb",extended: true})); 
app.use(express.urlencoded({limit:"30mb",extended: true}));

const visitors = []
app.use('/',(req,res) => {
    res.send('visitor API')
    console.log(req.body)
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
// app.listen(PORT)
module.exports = app