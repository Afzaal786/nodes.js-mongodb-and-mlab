"use strict";
let express = require('express');
let router = express.Router();

let User = require('../models/user');

router.get('/', function(req , res){
 
User.getAllUsers(err, User)
{
    if(err){
       res.send(err);
    }
}
    res.json();

});


router.post('/',function(req, res){
    let user = req.body;
    User.addUser(user, function(err , user){
if(err){
    res.send(err);
}
 res.json(user);
    });
});
//routers exporting
module.exports = router;