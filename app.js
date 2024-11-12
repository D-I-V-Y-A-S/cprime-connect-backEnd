require('dotenv').config()
const express = require('express')
const app = express()
const PORT =  process.env.PORT || 4000

const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())

//test-code
app.get('/api/v1',(request,response)=>{
    response.status(200).json({message:"HI from backend!"})
})

const route=require('./routes/router.js')
app.use('/api/v1',route)

mongoose.connect(process.env.DB_URL)
const db = mongoose.connection
db.on('error', (errorMessage) => console.log(errorMessage))
db.once('open', () => console.log('Connected to db successfully'))
app.listen(PORT,console.log(`Server running at http://localhost:${PORT}/api/v1/`))