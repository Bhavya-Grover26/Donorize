const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const Org = mongoose.model("Org")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require ('../keys')
const requireLogin = require('../middleware/requireLogin')

router.get('/',(req,res)=>{
    res.send("hello")
})

router.post('/signupuser',(req,res)=>{
    const {username,email,password} = req.body
    if(!email || !password || !username){
        return res.status(422).json({error:"pls add all fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists with that email"})
        }
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                username
    
            })
            user.save()
            .then(user=>{
                res.json({success: true, message:"saved succesfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch((err=>{
        console.log(err)
    }))
})

router.post('/signinuser', (req, res) => {
    const { username, password } = req.body;
    console.log("Received login request with username:", username);

    if (!username || !password) {
        return res.status(422).json({ error: "Please provide both username and password" });
    }

    User.findOne({ username: username })
        .then(savedUser => {
            if (!savedUser) {
                console.log("User not found");
                return res.status(422).json({ error: "Invalid username or password" });
            }

            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        console.log("Password matched, creating token");
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        const { _id, username, email } = savedUser;
                        res.json({ token, user: { _id, username, email } });
                    } else {
                        console.log("Invalid password");
                        return res.status(422).json({ error: "Invalid password" });
                    }
                })
                .catch(err => {
                    console.error("Error during password comparison:", err);
                    res.status(500).json({ error: "Internal server error" });
                });
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});

  

router.post('/signinorg',(req,res)=>{
    const{orgname,orgpassword} = req.body
    if(!orgname || !orgpassword){
        return res.status(422).json({error:"please add orgname or orgpassword"})
    }
    Org.findOne({orgname:orgname})
    .then(savedOrg=>{
        console.log("Saved Org:", savedOrg);
        if(!savedOrg){
           return res.status(422).json({error:"Invalid orgname or orgpassword"})
        }
        bcrypt.compare(orgpassword,savedOrg.orgpassword)
        .then(doMatch=>{
            if(doMatch){
                //res.json({message:"succesfully logged in"})
                const token = jwt.sign({_id:savedOrg._id},JWT_SECRET)
                res.json({token})
            }
            else{
                return res.status(422).json({error:"Invalid orgpassword"})
            }
        })
        .catch(err=>{
            console.log(err)
        })
    })
})

router.post('/signuporg',(req,res)=>{
    const {orgname,orgemail,orgpassword,address} = req.body
    if(!orgemail || !orgpassword || !orgname || !address){
        return res.status(422).json({error:"pls add all fields"})
    }
    Org.findOne({orgname:orgname})
    .then((savedOrg)=>{
        if(savedOrg){
            return res.status(422).json({error:"organisation already exists with that name"})
        }
        bcrypt.hash(orgpassword,12)
        .then(hashedorgpassword=>{
            const org = new Org({
                orgemail,
                orgpassword:hashedorgpassword,
                orgname,
                address
    
            })
            org.save()
            .then(org=>{
                res.json({message:"saved succesfully"})
            })
            .catch(err=>{
                console.log(err)
            })
        })
        
    })
    .catch((err=>{
        console.log(err)
    }))
})


module.exports = router 
