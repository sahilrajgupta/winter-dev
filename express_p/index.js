const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const member = require("./Members.js");

//app.use(logger);
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });
//handlebar middleware

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// set a static folder
//two routes one for static folder one for members json data

//app.use takes in a possible url address
//a route for members json data
app.use(
  "/api/members",
  require("/home/raj/winter-dev/express_p/routes/api/members.js")
); //using the members.js route

//app.use takes in a route to be send to the server here we are sending api members

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index",{
      title : 'Member App',
      member
  });
});
app.use(express.static(path.join(__dirname, "public")));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`)); //starting a server
