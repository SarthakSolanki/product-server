const dotenv = require('dotenv')
const express = require('express')
var multer = require('multer');
const webpush = require('web-push');
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const path = require('path');
// app.use(cors({ origin: "http://206.189.130.102" }))


dotenv.config({ path: './config/config.env' })
const PORT = process.env.PORT;

app.use(express.json())
require('./config/conn')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



const register = require('./Route/userRoute')
const showuser = require('./Route/userRoute')
const updateuser = require('./Route/userRoute')
const deleteuser = require('./Route/userRoute')
const login = require('./Route/userRoute')
const addproduct= require('./Route/userRoute')
const getproduct= require('./Route/userRoute')
const deleteproduct= require('./Route/userRoute')
const updateproduct= require('./Route/userRoute')


app.use('/api/v1', register)
app.use('/api/v1', showuser)
app.use('/api/v1', updateuser)
app.use('/api/v1', deleteuser)
app.use('/api/v1', login)
app.use('/api/v1', addproduct)
app.use('/api/v1', getproduct)
app.use('/api/v1', deleteproduct)
app.use('/api/v1', updateproduct)

























app.listen(PORT, () => {
    console.log('server start')
})