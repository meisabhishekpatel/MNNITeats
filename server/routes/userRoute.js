const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");


router.post("/register", async (req, res) => {
    const {name,email,password}=req.body
    const newUser=new User ({name,email,password})
    try {
        newUser.save().then(() => {
            console.log('USER added to DB.');
            res.redirect('/');
          })
         
          .catch(err => {
            res.status(400).send("Unable to save user to database.");
          });
      
        res.status(200).json({
            success:true,
            message:'Register success'
        })
    } catch (error) {
        res.status(400).json({ message: error });
    }
});

router.post("/login", async (req, res) => {
    const {email,password}=req.body

    try {
        const user = await userModel.find({email,password})
        if(user.length > 0){
            const currentUser={
                name:user[0].name,
                email:user[0].email,
                isAdmin:user[0].isAdmin,
                _id:user[0].Id
            }
            res.status(200).send(currentUser)
        }else{
        res.status(404).json({
          message:'Login failed'
        })
    }}
         catch (error) {
        res.status(400).json({ message: error });
    }
});

module.exports = router