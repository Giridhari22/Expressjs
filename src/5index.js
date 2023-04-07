// in this file we write js file to serve online . 
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");

// built in middleware


// this is how we serve ADVOCATE  file on server
const staticPath = path.join(__dirname, '../public/ADVOCATE');
app.use(express.static(staticPath));


app.get("/", (req, res)=>{
    res.send("hello from the express server")
});

app.listen(port, ()=>{
    console.log(`welcome to the server ${port}`);
});