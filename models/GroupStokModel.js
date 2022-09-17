const mongoose = require("mongoose");

const GroupStokSchema = new mongoose.Schema({
  kodeGroup: { type: String },
  namaGroup: { type: String },
});

module.exports = mongoose.model("GroupStok", GroupStokSchema);
