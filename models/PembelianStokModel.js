const mongoose = require("mongoose");

const PembelianStokSchema = new mongoose.Schema(
  {
    nomorNota: { type: String },
    tanggal: { type: String },
    jenis: { type: String },
    kodeSupplier: { type: String },
    total: { type: Number, default: 0 },
  },
  { timestamps: {} }
);

module.exports = mongoose.model("PembelianStok", PembelianStokSchema);
