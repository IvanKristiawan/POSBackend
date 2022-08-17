import mongoose from "mongoose";

const StokSchema = new mongoose.Schema({
    gambarId: [String],
    gambar: [String],
    kodeGroup: {type: String},
    kodeStok: {type: String},
    kodeBarcode: {type: String},
    namaStok: {type: String},
    merk: {type: String},
    satuanKecil: {type: String},
    satuanBesar: {type: String},
    konversi: {type: Number},
    qty: {type: Number, default: 0},
    hargaJualKecil: {type: Number},
    hargaJualBesar: {type: Number},
})

export default mongoose.model('Stok', StokSchema);