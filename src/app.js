const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const userdetailsRouter = require('./routes/userDetails/userDetails.router');

// app.use(cors({
//     origin: 'http://localhost:3000',
// }));
app.use(cors());
app.use(express.json());

app.use(userdetailsRouter);

app.post('/', (req, res) =>{ 
    const data = {
        name: req.body.name,
        email: req.body.email,
        place: req.body.place,
    }
    res.status(200).json(data);
})




module.exports = app;