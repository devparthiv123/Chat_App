const express = require('express')
const app = express()

const { db } = require("./Utils/db")
require("dotenv").config()

app.get('/', (req, res) => res.send('Hello World!'))

db.on("error", console.error.bind("Connection Error :- "))
db.once("open", (error, res) => {
    if (error) throw Error()
    app.listen(process.env.PORT, () => console.log(`Server started on ${port}!`))
console.log("🚀 ~ file: index.js:10 ~ db.once ~ res:", res)
})