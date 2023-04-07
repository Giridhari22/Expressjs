// in this file we see thatwhen we change the name of view into template then we have to tell the server the new name and directory of new file
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");



// this is how we serve ADVOCATE  file on server
// built in middleware
const staticPath = path.join(__dirname, '../public/real estate');
// set temmplates path
const templatePath = path.join(__dirname, "../templates"); 


// to set the view engine
app.set("view engine", "hbs");
//to set template folder instead of view engine
app.set("views", templatePath);

app.use(express.static(staticPath));
// template engine route
app.get("", (req, res)=>{
    res.render("6index.hbs"); // render matlb ,, server pe wo file run krwao
});

// adding about page in template folder
app.get("/about", (req,res)=>{
    res.render("7about");
});

app.get("/", (req, res)=>{
    res.send("hello from the express server")
});

app.listen(port, ()=>{
    console.log(`welcome to the server ${port}`);
})