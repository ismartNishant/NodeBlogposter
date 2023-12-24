const express = require("express");
const app = express();
app.listen(4000);


//getting response 
app.get("/", (req, res) => {
  //  res.send("<p>Hi there nishant</p>");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  //  res.send("<p>Hi there nishant</p>");
  res.sendFile("./views/about.html", { root: __dirname });
});

//redirect
app.get("/about-us" ,(req,res) =>{
    res.redirect("/about");
})

//for every request it will send file 
app.use((req,res) =>{
    res.status(404).sendFile("./views/404.html", { root: __dirname })
})