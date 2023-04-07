
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
    res.render("index.hbs"); // render matlb ,, server pe wo file run krwao
});

// adding about page in template folder
app.get("/about", (req,res)=>{
    res.render("7about");
});


app.get("/about/*", (req,res)=>{
    res.render("8error404",{
       errorcomment:"oops page couldn't be found",
    });

})
// ****************in this file we create 404 error page***********
// to add error 404 page in our website
app.get("*", (req,res)=>{
    res.render("8error404",{
       errorcomment:"oops page couldn't be found",
    });

})

app.listen(port, ()=>{
    console.log(`welcome to the server ${port}`);
})