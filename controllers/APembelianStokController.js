import APembelianStok from "../models/APembelianStokModel.js";

export const getAPembelianStok = async (req, res) => {
  try {
    const aPembelianStoks = await APembelianStok.find();
    res.json(aPembelianStoks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getAPembelianStokById = async (req, res) => {
  try {
    const aPembelianStok = await APembelianStok.findById(req.params.id);
    res.json(aPembelianStok);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveAPembelianStok = async (req, res) => {
  const aPembelianStok = new APembelianStok(req.body);
  try {
    const insertedAPembelianStok = await aPembelianStok.save();
    // Status 201 = Created
    res.status(201).json(insertedAPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateAPembelianStok = async (req, res) => {
  try {
    const updatedAPembelianStok = await APembelianStok.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedAPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteAPembelianStok = async (req, res) => {
  try {
    const deletedAPembelianStok = await APembelianStok.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedAPembelianStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
