const express=require("express")
const mongoose=require("mongoose")
const contactRoutes=require('./routes/contact')
const PORT=process.env.PORT || 6000
const app=express()

mongoose.connect("mongodb://localhost:27017/mern1", { useUnifiedTopology: true, useNewUrlParser: true } )

app.use(express.json())
app.use('/api/contact',contactRoutes)
app.listen(PORT,()=>console.log("connected to database "))