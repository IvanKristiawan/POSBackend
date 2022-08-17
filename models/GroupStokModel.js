import mongoose from "mongoose";

const GroupStokSchema = new mongoose.Schema({
    kodeGroup: {type: String},
    namaGroup: {type: String},
})

export default mongoose.model('GroupStok', GroupStokSchema);