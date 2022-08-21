import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: { type: String },
    password: { type: String },
    tipeUser: { type: String }, //SPV, KSR
    kodeNota: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
