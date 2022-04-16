 const { response } = require('../../app');
const userDetails = require('../../models/userDetails.model');


async function getuserDetails(req, res){
    const data = await userDetails.find();
    res.status(200).json(data);
}

function postuserDetails(req, res){
    const userData = {
        name: req.body.name,
        email: req.body.email,
        place: req.body.place,
    }
    const data = new userDetails(userData)
    data.save().then(response => {
        res.status(200).json(response);
    }).catch(err =>{
        if(err){
            console.log("Error ", err);
        }
    })
}

async function getSingleUserDetails(req, res){
    const id = req.params.id
    const data = await userDetails.findById(id);
    console.log('data ===> ', data);
    res.status(200).json(data);
  /// res.status(200).json("asdfasf")

}

async function userDetailsUpdate(req, res){
    const id = req.params.id
    const data = {
        name: req.body.name,
        email: req.body.email,
        place: req.body.place,
    }
    await userDetails.findByIdAndUpdate(id, data, (err, docs)=>{
        if(!err){
            res.status(200).json("Updated Successfully");
        }else{
            res.json("Update Failed..!");
        }
    })
}

async function deleteUserData(req, res){
    const id = req.params.id
    await userDetails.findByIdAndDelete(id, (err, docs)=>{
    
            if(!err){
                if(id === JSON.stringify(docs)['_id']){
                    res.status(200).json("deleted successfully")
                }else if(JSON.stringify(docs) === 'null'){
                    res.status(200).json('No Data to Delete')
                }
            }else{
                res.json(err);
            }
        
    })
}

module.exports = {
    getuserDetails,
    postuserDetails,
    getSingleUserDetails,
    userDetailsUpdate,
    deleteUserData,
}