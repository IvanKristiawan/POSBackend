import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema({
    kodeSupplier: { type: String },
    namaSupplier: { type: String },
    alamatSupplier: { type: String },
    kota: { type: String },
    telp: { type: String },
    npwp: { type: String },
});

export default mongoose.model('Supplier', SupplierSchema);