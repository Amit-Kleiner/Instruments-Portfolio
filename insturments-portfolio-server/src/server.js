const serverConfig = require("././config/server.config");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Set cors
app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Instruments Portfolio Server." });
});

require("./routes/instrument.route.js")(app);

// set port, listen for requests
app.listen(serverConfig.PORT, () => {
  console.log(`Server is running on port ${serverConfig.PORT}.`);
});