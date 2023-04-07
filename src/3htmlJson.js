// in this video we gonna learn to send html and json data  through express.js

const express = require("express");
const app = express();

// by this way we can pass html code in express.js
app.get("/", (req, res)=>{
    res.write(" <h1> we can also write html in this</h1> ")
    res.write("<h2> for html file we have to use res.write</h2>")
    res.send(); // when we use res.write .. at last we have to use res.send

});

// This is how we send json file
// app.get("/api", (res, res)=>{

//     res.send([{
//         id:1,
//         name : "vinod",
//     },
//     {
//         id:2,
//         name : "raju"
//     }
// ])
// });

// this is another way to send json file
app.get("/api", (req, res)=>{

    res.json([{
        id:1,
        name : "vinod",
    },
    {
        id:2,
        name : "raju"
    }
])
});

app.listen(8000 ,() =>{
    console.log("Giridhari jha")
})