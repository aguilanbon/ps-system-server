const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static( path.join( __dirname, 'public' ) ) )

mongoose.connect(`mongodb://localhost:27017`).then(() => {
    console.log('connected to db');
    app.listen(3000, console.log('server running'))
})
