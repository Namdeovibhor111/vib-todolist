const path = require("path")
const express = require("express")
const app = express()

//path
staticPath = path.join(__dirname, 'public');
//console.log(path.join(__dirname, 'public'))

app.use(express.static(staticPath))
app.get("/",(req,res)=>{

    res.send("Hello World!")
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log( `"Listening to port at ${PORT}`)
});