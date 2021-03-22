
const Contacts = require('../models/Contact')
 const getContacts=async (req,res)=>{
    try {
        const contactLists = await Contacts.find()
        res.status(200).send({msg:"added contact successfuly",contactLists})

    } catch (error) {
        res.send({ message: "error to find contacts" })
    }

}

 const addContact =async (req, res) => {
    //  const {name,email,phone}=req.body
    const newContact=new Contacts(req.body)
    
    try {
       await newContact.save()
       res.status(200).send('contact added successfuly')
    } catch (error) {
        res.status(500).send({message:'canot add contact'})
    }
}

const getoneContact= async (req, res) => {
    const id = req.params.id
    try {
        const contactToFind=find = await Contacts.findById({ _id: id })
        res.send({message:"contact to find" ,contactToFind})

    } catch (error) {
        res.status(500).send({ message: 'error to get contact' })

    }

}

 const deleteContact= async (req, res) => {

    const id = req.params.id
    try {
        await Contacts.findByIdAndDelete({ _id: id })
        res.send({ message: "contact deleted" })
    } catch (error) {
        res.send({ message: "deleted failed" })
    }

}
 const editContact =async (req,res)=>{
    let updates = req.body
    try {
       await  Contact.findOneAndUpdate({ _id: req.params.id }, updates, { new: true })
        res.send('contact updated')
        
    } catch (error) {
        res.send('fail to update contact')
    }
}

module.exports=Controllers={getContacts,addContact,deleteContact,editContact,getoneContact}