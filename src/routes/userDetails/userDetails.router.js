const express = require('express');
const {getuserDetails, postuserDetails, 
        getSingleUserDetails, userDetailsUpdate,
        deleteUserData,
    } = require('./userDetails.controller');

const userdetailsRouter = express.Router();


userdetailsRouter.get('/', getuserDetails);
userdetailsRouter.post('/getdata', postuserDetails);
userdetailsRouter.get('/getdata/:id', getSingleUserDetails);
userdetailsRouter.put('/updatedata/:id', userDetailsUpdate);
userdetailsRouter.delete('/deleteuser/:id', deleteUserData);




module.exports = userdetailsRouter;