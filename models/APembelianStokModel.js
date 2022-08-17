import mongoose from "mongoose";

const APembelianStokSchema = new mongoose.Schema({
    nomorNota: {type: String},
    kodeStok: {type: String},
    qty: {type: Number},
    hargaSatuan: {type: Number},
    potongan: {type: Number},
    subtotal: {type: Number},
})

export default mongoose.model('APembelianStok', APembelianStokSchema);