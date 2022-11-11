const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');

const app = express();


const PORT = 5000;

app.use(express.json({limit:"30mb",extended: true})); 
app.use(express.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

const visitors = []
app.use('/',(req,res) => {
    res.send('hackathon API')
    console.log(req.body)
})

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
// app.listen(PORT)
module.exports = app