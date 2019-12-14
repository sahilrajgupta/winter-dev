const express = require("express");
const path = require("path");
const logger = require("/home/raj/winter-dev/express_p/midddleware/logger.js");
const app = express();

//app.use(logger);
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

// set a static folder
//two routes one for static folder one for members json data
app.use(express.static(path.join(__dirname, "public")));
//app.use takes in a possible url address
app.use("/api/members", require("./routes/api/members"));
//app.use takes in a route to be send to the server here we are sendinf api members

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
