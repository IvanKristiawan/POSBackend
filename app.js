const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
const SupplierRoute = require("./routes/SupplierRoute.js");
const GroupStokRoute = require("./routes/GroupStokRoute.js");
const StokRoute = require("./routes/StokRoute.js");
const PembelianStokRoute = require("./routes/PembelianStokRoute.js");
const APembelianStokRoute = require("./routes/APembelianStokRoute.js");
const PenjualanStokRoute = require("./routes/PenjualanStokRoute.js");
const APenjualanStokRoute = require("./routes/APenjualanStokRoute.js");
const UserRoute = require("./routes/UserRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");

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
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
