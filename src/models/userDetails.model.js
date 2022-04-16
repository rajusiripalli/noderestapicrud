const mongoose = require('mongoose');

const MyUserDetailsModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
    }, 
    place: String 

})
   


module.exports =  mongoose.model('UserData', MyUserDetailsModel);
