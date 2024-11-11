const express = require('express')
const router = express.Router()

const {loginController}=require('../controller/loginController')

router.post('/validate/userLogin',loginController)

module.exports=router

