const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema =new mongoose.Schema({
    username:{
        type:String,
        require:true, // taki koi isko empty na chhod de
    },
    email:{
        type: String,
        require:true,
    },
    phone:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    },
});

// #12 jsonwebToken
userSchema.methods.generateToken = function(){
    try{
        return jwt.sign({
            userId: this._id.toString(), // Payload
            email: this.email,
            isAdmin:this.isAdmin,
        },
        process.env.JWT_SECRET_KEY, // Secret Key
        {
            expiresIn:"30d",  // expire it after 30 days (30d)
        }
        );
    }catch(err){
      console.error(err)
    }
}

const User = new mongoose.model("product2",userSchema);
module.exports=User;

