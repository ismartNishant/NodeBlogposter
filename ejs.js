const express = require("express");
const app = express();
const blogRoutes = require("./routes/Routes");
const mongose = require("mongoose");
// Serve static files from the 'public' folder
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const dburl =
    "mongodb+srv://nishant:nishant11@nodetutes.3z5ngvc.mongodb.net/node-tuts";
mongose
    .connect(dburl)
    .then((result) => {
        console.log("connected to db");
        app.listen(3000);
    })
    .catch((err) => console.log(err));

app.set("view engine", "ejs"); //by default it will look is current folder
app.set("views", "./views/myviews"); //so express will find your views on myviews folder

//routes
//home route
app.get("/", (req, res) => {
    res.redirect("/blogs");
});

app.get("/about", (req, res) => {
    res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

//for every request it will send file
app.use((req, res) => {
    res.status(404).render("404", { title: "404" });
});


//------------------------- //middleware
// app.use((req, res, next) => {
//     console.log("hi nancy");
//     next();
// });

//-----------------to add perticular blog and save to dbs
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "My name is V",
//         snippet: "i am a good boy",
//         body: "helo guys im v",
//     });

//     blog
//         .save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });

// -- -- -- -- -- -- -- -- -- -- --to get single blog with id-- -- -- -- -- -- -- -
// app.get("/single-blog", (req, res) => {
//     Blog.findById("658692f8fca77204dbd4d00a")
//         .then((result) => {
//             res.render('details', { title: 'Blog Details', blog: result });
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });