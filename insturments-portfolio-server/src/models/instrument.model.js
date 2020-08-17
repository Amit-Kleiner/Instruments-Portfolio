const sql = require("./db.js");
const random = require('random-int');
const serverConfig = require("../config/server.config.js");

// constructor
const Instrument = function(instrument) {
  this.name = instrument.name;
  this.symbol = instrument.symbol;
  this.instrumentType = instrument.instrumentType;

  const id = random(serverConfig.ID_MAX_VALUE);
  this.instrumentId = id;
};

Instrument.create = (newInstrument, result) => {
  sql.query("INSERT INTO instrument SET ?", newInstrument, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);

      return;
    }

    console.log("created instrument: ", {...newInstrument });
    result(null, { ...newInstrument });
  });
};

Instrument.getAll = result => {
  sql.query("SELECT * FROM instrument", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

      return;
    }

    console.log("instruments: ", res);
    result(null, res);
  });
};

Instrument.remove = (id, result) => {
  sql.query("DELETE FROM instrument WHERE instrumentId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);

      return;
    }

    if (res.affectedRows == 0) {
      result({ kind: "not_found" }, null);
      
      return;
    }

    console.log("deleted instruments with id: ", id);
    result(null, res);
  });
};

module.exports = Instrument;