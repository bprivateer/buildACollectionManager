const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const morgan = require("morgan");
const routes = require("./routes/index");
const bodyParser = require('body-parser');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "mustache");
app.set("layout", "layout");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));
app.use(routes);

app.listen(3000, function(){
  console.log("were in");
})
