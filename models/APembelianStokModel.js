const mongoose = require("mongoose");

const APembelianStokSchema = new mongoose.Schema({
  nomorNota: { type: String },
  kodeStok: { type: String },
  qty: { type: Number },
  hargaSatuan: { type: Number },
  potongan: { type: Number },
  subtotal: { type: Number },
});

module.exports = mongoose.model("APembelianStok", APembelianStokSchema);
