import express from 'express'

const port = process.env.PORT || 3000;

const app = express()
app.use(express.static('./finexo-html'))
app.get('/' , (req, res) => {
    res.send("hello")
})
app.listen(port, () => {
    console.log("Server running on port 3000");

})