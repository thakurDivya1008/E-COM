const express = require("express");
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware.js")

const router = express.Router();

//@route POST /api/users/register
//@desc Register a new user
//@access Public

router.post("/register", async(req,res) => {
    

    const {name, email, password} = req.body;

    try{
        //Registration Logic
        // res.send({name, email, password});
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists"});

        user = new User({ name, email, password });
        await user.save();

        //Create JWT Payload

        const payload = {user: {id: user._id, role: user.role}};

        //sign and return the token alonng with user data
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "24h" }, (err, token) => {
            if(err) throw err;

            // Send the user and token in Response

            res.status(201).json({
                user:{
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            });
        });


        // res.status(201).json({
        //   user: {
        //     _id: user._id,
        //     name: user.name,
        //     email: user.email,
        //     role: user.role,
        //   },
        // });
    }
    catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
});

// @route POST /api/users/login
//@desc Authenticate user
//@access public

router.post("/login", async (req,res) => {
    const {email, password} =req.body;
     console.log("Login Request Body:", req.body);
    try {
        //Find the user by email
        let user = await User.findOne( { email });

        if(!user) return res.status(400).json({message: "Invalid Credentials"});
        const isMatch = await user.matchPassword(password);

        if(!isMatch)  return res.status(400).json({message: "Invalid Credentials"});

        //Create JWT Payload

        const payload = {user: {id: user._id, role: user.role}};

        //sign and return the token alonng with user data
        jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "24h" }, (err, token) => {
            if(err) throw err;

            // Send the user and token in Response

            res.json({
                user:{
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                token,
            });
        });



    }catch (error){
        console.log(error);
        res.status(500).send("Server Error");
    }
});


// @route GET/api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private

 router.get("/profile",protect, async (req,res) => {
    
 });

module.exports = router;
