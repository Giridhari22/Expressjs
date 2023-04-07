const path = require("path");
const express = require("express");
const app = express();

// in this file we have to join my static website with server ..4index.html and 4style.css
const staticPath = path.join(__dirname, "../public");
// console.log(path.join(__dirname, "../public"));

// built in middleware
app.use(express.static(staticPath)); 

// app.get("/", (req, res) =>{
//     res.send("hello from Giridhari Jha");
// });



app.listen(8000, ()=>{
    console.log("listening the port at 8000");
});