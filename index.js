const express = require("express")
const app = express()
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.send("WEBSITE IS UNDER CONSTRUCTION 8==D")
})

app.listen(port, () => {
    console.log("SERVER RUNNING......")
})