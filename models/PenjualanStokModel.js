import mongoose from "mongoose";

const PenjualanStokSchema = new mongoose.Schema(
  {
    nomorNota: { type: String },
    tanggal: { type: String },
    total: { type: Number, default: 0 },
    nonTunai: { type: Number, default: 0 },
    tunai: { type: Number, default: 0 },
    kembali: { type: Number, default: 0 },
  },
  { timestamps: {} }
);

export default mongoose.model("PenjualanStok", PenjualanStokSchema);
