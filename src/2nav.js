// what is routing  we will see in this video
// ****we have to show this on server***
// ./ (home page) - welcome to home page 
// /about - welcome to my about page 
// /contact -welcome to my contact page
// /temp - welcome to my temperature page  

const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    res.send("hello from Giridhari Jha");
});

app.get("/about", (req, res) =>{
    res.send("hello from About page");
});

app.get("/contact", (req, res) =>{
    res.send("hello from contact page");
});

app.get("/temp", (req, res) =>{
    res.send("hello from temp page");
});

app.listen(8000, ()=>{
    console.log("listening the port at 8000");
});