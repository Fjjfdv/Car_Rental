// const express = require('express');
// const router = express.Router();
// const {home,register,login,user} = require("../controllers/auth-controllers");
// const signupSchema = require("../validators/auth-validator");
// const validate = require("../middlewares/validate-middleware")
// // const hii = require('../controllers/auth-controllers');
// const authMiddleware = require("../middlewares/auth-middleware");

// // router.get('/', (req,res)=> {
// //     res.status(200)
// //     .send("Welcome to Router");
// // });

// // router.route('/').get((req,res)=> {   // We can try this also
// //     res.status(200)
// //     .send("Hello by Router");
// // });

// // router.route('/register').get((req,res)=> {   // We can try this also
// //     res.status(200)
// //     .send("Welcome to registration Page by Router");
// //});

// router.route('/').get(home);
// // router.route('/register').post(register);
// // router.route('/register').post(validate(signupSchema),authcontrollers.register);
// router.post("/register", (validate(signupSchema)));
// router.route('/login').post(login);
// router.route('/user').get(authMiddleware, user);

// module.exports=router;


const express= require("express");
const router=express.Router(); //used to create new router object

const authMiddleware=require("../middlewares/auth-middleware");
const authcontrollers=require("../controllers/auth-controllers")
// const autocontrollers=require("../controllers/auth-controller");
const {register,home,login}=require("../controllers/auth-controllers");

const {signupSchema,loginSchema}= require("../validators/auth-validator");
const validate=require("../middlewares/validate-middleware");


// router.route("/").get((req,res)=>{
//     res.status(200).send("welcome to home page using router");
// })
// router.route("/register").get((req,res)=>{
//     res.status(200).send("welcome to register page using router");
// })

router.route("/").get(home); //home is a function define in auth-controller
// router.route("/register").post(register);
router.route("/register").post(validate(signupSchema),register);
router.route("/login").post(validate(loginSchema),login);
router.route("/user").get(authMiddleware,authcontrollers.user);
//authMiddleware is for checking that we have jwt or not i.e. user is login or not

module.exports=router;