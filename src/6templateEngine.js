// template engine is very useful handlebars ... by which we can make our website Dynamics. 
// agar ham kisi page pe sign in karte hain to usme sign in krne k bad apka name aa jata hai ...like "Giridhari Jha".
// in this video we see three types of template engine 1.hbs 2.ejs, 3.mustache 
// we need to install these three by simply writing in terminal 
// npm install hbs -> make a folder "views"
// in this file we write js file to serve online . 
const express = require("express");
const app = express();
const port = 8000;
const path = require("path");



// this is how we serve ADVOCATE  file on server
// built in middleware
const staticPath = path.join(__dirname, '../public/real estate');
// app.use(express.static(staticPath));


// to set the view engine
app.set("view engine", "hbs");

// template engine route
app.get("", (req, res)=>{
    res.render("index.hbs"); // render matlb ,, server pe wo file run krwao
});


app.get("/", (req, res)=>{
    res.send("hello from the express server")
});

app.listen(port, ()=>{
    console.log(`welcome to the server ${port}`);
})