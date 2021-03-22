const mongoose=require("mongoose")

const contactSchema=new mongoose.Schema({
name:{type:String,require:true},
email:{type:String,require:true},
phone:Number
})

module.exports=Contact=mongoose.model('contact',contactSchema)