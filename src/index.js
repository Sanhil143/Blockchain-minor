const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const router = require('./routers/router')
mongoose.set('strictQuery', true)

dotenv.config()
const app = express()
app.use(express.json())


mongoose.connect(process.env.MY_DB_URL)
      .then(() => console.log("My DB is connected"))
      .catch((err) => console.error(err))

app.use('/', router)

app.listen(process.env.PORT || 4000, () => {
      console.log("Express app running on port " + process.env.PORT || 4000);
})

 