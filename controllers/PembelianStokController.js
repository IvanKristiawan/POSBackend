const PembelianStok = require("../models/PembelianStokModel.js");

const getPembelianStoks = async (req, res) => {
  try {
    const pembelianStoks = await PembelianStok.find();
    res.json(pembelianStoks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getPembelianStokById = async (req, res) => {
  try {
    const pembelianStok = await PembelianStok.findById(req.params.id);
    res.json(pembelianStok);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const savePembelianStok = async (req, res) => {
  const pembelianStok = new PembelianStok(req.body);
  try {
    const insertedPembelianStok = await pembelianStok.save();
    // Status 201 = Created
    res.status(201).json(insertedPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updatePembelianStok = async (req, res) => {
  try {
    const updatedPembelianStok = await PembelianStok.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deletePembelianStok = async (req, res) => {
  try {
    const deletedPembelianStok = await PembelianStok.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getPembelianStoks,
  getPembelianStokById,
  savePembelianStok,
  updatePembelianStok,
  deletePembelianStok,
};
