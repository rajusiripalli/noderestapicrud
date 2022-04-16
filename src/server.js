// const http = require('http');
// const app = require('./app');

// const PORT = process.env.PORT || 8000;


// const server = http.createServer(app);

// server.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}`);
// })

const http = require('http');
const { default: mongoose } = require('mongoose');
const app = require('./app');

const PORT  = process.env.PORT || 8000;

const server = http.createServer(app);

mongoose.connect('mongodb://localhost:27017', (err)=>{
    if(!err){
        console.log("MongoDB is connected ....")
    }else{
        console.log("mongdob error ==>", err);
    }
});

server.listen(PORT, (err) =>{
    if(!err){
        console.log(`Server Listening on Port ${PORT}`)
    }else{
        console.log("Error ===> ", err)
    }
});