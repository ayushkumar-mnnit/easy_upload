
const express=require('express')
const User = require('../models/user')

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('Hey! there everything is fine at backend')  
})


// register a new user:


router.post('/register',async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const isExisting=await User.findOne({email})
        if(isExisting)
        {
            console.log('user already exists')
            return res.json({msg:'user with this eamil already exists'})
        }else{
            const result=await User.create({name,email,password})
           
            if(result)
            {
                console.log('user registered');
                res.status(200).json({msg:'user registered successfully'})
            }else{
                console.log('some error occured');
                res.status(500).json({msg:'user registeration failed '})
            }
        }   

    } catch (error) {
        console.log(error)
    }
})


// Login route:

router.post('/login',async(req,res)=>{
    try {
        
        const {email,password}=req.body

        const finduser=await User.findOne({email})

        if(!finduser)
        {
            res.status(400).json({msg:'Invalid email or password'})
        }else{
            if(password===finduser.password)
            {
                res.status(200).json({msg:'Login successful'})
            }else{
                res.status(400).json({msg:'Invalid email or password..'})
            }
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({msg:'some error occured'})
    }
})




module.exports=router