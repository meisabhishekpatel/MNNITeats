const express = require("express");
const router = express.Router();
const User= require("../models/userModel");


router.post("/register", async (req, res) => {
    const {name,email,password}=req.body
    const newUser=new User ({name,email,password})
    try {
        newUser.save().then(() => {
            console.log('User added to DB.');
           res.status(200).json({
            sucess:true,
            message: 'Registeration sucessful'
           })
          })
         
          .catch(err => {
            res.status(400).send("Unable to save user to database.");
          });
      
        // res.status(200).json({
        //     success:true,
        //     message:'Register success'
        // })
    } catch (error) {
        res.status(400).json({ message: (error) });
    }
});

router.post("/login", async (req, res) => {
    const {email,password}=req.body

    try {
        const user = await User.find({email,password})
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

router.get("/getallusers", async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(404).json({ message: error.stack});
    }
});

router.post('/deleteuser', async(req, res) => {
    const userid = req.body.userid
    try{
        await User.findOneAndDelete({_id:userid})
        res.status(200).send('User Deleted')
    } catch(error){
        res.status(404).json({message:error.stack})
    }
})
module.exports = router