import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
import SupplierRoute from "./routes/SupplierRoute.js";
import GroupStokRoute from "./routes/GroupStokRoute.js";
import StokRoute from "./routes/StokRoute.js";
import PembelianStokRoute from "./routes/PembelianStokRoute.js";
import APembelianStokRoute from "./routes/APembelianStokRoute.js";
import PenjualanStokRoute from "./routes/PenjualanStokRoute.js";
import APenjualanStokRoute from "./routes/APenjualanStokRoute.js";

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// Use Routes
app.use(SupplierRoute);
app.use(GroupStokRoute);
app.use(StokRoute);
app.use(PembelianStokRoute);
app.use(APembelianStokRoute);
app.use(PenjualanStokRoute);
app.use(APenjualanStokRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
