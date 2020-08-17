module.exports = app => {
    const instruments = require("../controllers/instrument.controller.js");
  
    // Create a new instrument
    app.post("/instruments", instruments.create);
  
    // Retrieve all instruments
    app.get("/instruments", instruments.findAll);
  
    // Delete an instrument by ID
    app.delete("/instruments/:instrumentId", instruments.delete);
  };