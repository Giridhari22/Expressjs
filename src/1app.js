const express = require("express");
const app = express();

// API
// get - to read the new data 
// post - to create new data 
// put - to update the data 
// delete - to delete the data

// to create routing 

// app.get(route , callback) // 2 parameter pass karte hai
//  route k jagah server rhega yani wo jagah jaha data ko fetch krna hai like home page
// aur callback me do chij pass hoga (request aur response)

// The callback function has 2 parameters, request(req) and response(res). 
// the request object(res) represents the HTTP requests and has properties for the request query string, parameters , body 
// HTTP headers, etc. 

// similarly , the response object represents the HTTP  response
// that the Express app sends when it receives an HTTP  request.

app.get("/", (req, res) =>{
    res.send("hello from Giridhari Jha");
});

app.get("/about", (req, res) =>{
    res.send("hello from About page");
});


app.listen(8000, ()=>{
    console.log("listening the port at 8000");
});