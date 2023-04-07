const express = require("express");
const app = express();
const port = 8000;
const hbs = require("hbs")
const path = require("path");
const requests = require("requests")




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
        channelName:"Giridhari jha"
    }); // render matlb ,, server pe wo file run krwao
});

// adding about page in template folder
app.get("/about", (req,res)=>{
     requests(
            // api of amritsar weather
            // ${req.query.name} by using this user can get their own city by just writing name of the city
            `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=039fd85eb884da8c7c2f232702ed6203&units=metric`
        )
        .on("data", (chunk)=>{
            // to convert api data into object format
            const objData = JSON.parse(chunk); //chunk means stepby step
            // convert objData into array
            const arrData = [objData];
            console.log(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
            // console.log(arrData);
            // to show data on localhost
            res.write(arrData[0].name);
        })
        .on("end", (err)=>{
            if(err) return console.log("connection closed due to errors", err);
            res.send();
        });
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