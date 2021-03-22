const express = require('express')
const Contacts = require('../models/Contact')
const router = express.Router()

const Controllers=require('../controllers/contactControllers')

//get all contact 
router.get('/', Controllers.getContacts)
//post conatct
router.post('/',Controllers.addContact )
//get one contact

router.get('/:id',Controllers.getoneContact)
//delete contact
router.delete('/:id',Controllers.deleteContact)
//update contact
router.put('/:id',Controllers.editContact)

module.exports = router