import mongoose from "mongoose";

const APenjualanStokSchema = new mongoose.Schema({
    nomorNota: {type: String},
    kodeStok: {type: String},
    namaStok: {type: String},
    qty: {type: Number},
    hargaSatuan: {type: Number},
    total: {type: Number},
})

export default mongoose.model('APenjualanStok', APenjualanStokSchema);