
const express = require("express");
const app = express();
const port = 8000;
const hbs = require("hbs")
const path = require("path");



// this is how we serve ADVOCATE  file on server
// built in middleware
const staticPath = path.join(__dirname, '../public');
// set temmplates path
const templatePath = path.join(__dirname, "../templates/views"); 
// set partialsPath
const partialsPath = path.join(__dirname,"../templates/partials");

// to set the view engine
app.set("view engine", "hbs");
//to set template folder instead of view engine
app.set("views", templatePath);
// registering partial path
hbs.registerPartials(partialsPath)

app.use(express.static(staticPath));
// template engine route
app.get("", (req, res)=>{
    res.render("index.hbs",{
        channelName:"Giridhari Jha"
    }); // render matlb ,, server pe wo file run krwao
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