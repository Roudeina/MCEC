const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));

app.use(function(req, res, next) {



////////

const db = require("./app/models");
db.sequelize.sync()
.then(() => {
  console.log("Database connected !")
})
.catch((err) => {
  console.log("error while connection to db",err)
})

res.header("Access-Control-Allow-Origin", "*");
res.header(
  "Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept"
);
next();
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to 'mi casa es tu casa' application.This is a GET route for test" });
});


require("./app/routes/users.routes")(app);
require('./app/routes/auth.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
