const Instrument = require("../models/instrument.model.js");

// Create and Save a new Instrument
exports.create = (req, res) => {
  if (!req.body) {
    console.log(req);

    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create an Instrument
  const instrument = new Instrument({
    name: req.body.name,
    symbol: req.body.symbol,
    instrumentType: req.body.instrumentType
  });

  // Save Instrument in the database
  Instrument.create(instrument, async (err, data) => {
    if (err)
      await res.status(500).send({
        message:
          err.message || "Some error occurred while creating the instrument."
      });
    else await res.send(data);
  });
};

// Retrieve all Instruments from the database.
exports.findAll = (req, res) => {
    Instrument.getAll(async (err, data) => {
    if (err)
      await res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving instruments."
      });
    else await res.send(data);
  });
};

// Delete an instrument with the specified instrumentId in the request
exports.delete = (req, res) => {
  Instrument.remove(req.params.instrumentId, async (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        await res.status(404).send({
          message: `Not found instrument with id ${req.params.instrumentId}.`
        });
      } else {
        await res.status(500).send({
          message: "Could not delete instrument with id " + req.params.instrumentId
        });
      }
    } else await res.send({ message: `Instrument was deleted successfully!` });
  });
};
