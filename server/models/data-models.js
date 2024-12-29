const {Schema, model,default:mongoose, Mongoose} = require("mongoose");

const data = new Schema({
    brand:{type:String, require:true},
    model:{type:String, require:true},
    image:{type:String, require:true},
    color:{type:String, require:true},
    year:{type:String, require:true},
    contact:{type:String,required:true},
    price_per_day:{type:String,required:true},
    availability:{type:String, require:true}
})

const Data = new model('Services',data);
module.exports = Data;