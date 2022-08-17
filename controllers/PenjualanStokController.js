import PenjualanStok from "../models/PenjualanStokModel.js";

export const getPenjualanStoks = async (req, res) => {
  try {
    const penjualanStoks = await PenjualanStok.find();
    res.json(penjualanStoks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getPenjualanStoksCount = async (req, res) => {
  try {
    const penjualanStoks = await PenjualanStok.find();
    const penjualanStoksLength = penjualanStoks.length;
    let kodePenjualanStoksCount;
    let increment;

    if (penjualanStoksLength < 1) {
      kodePenjualanStoksCount = (1).toLocaleString("en-US", {
        minimumIntegerDigits: 5,
        useGrouping: false,
      });
    } else {
      increment = penjualanStoksLength + 1;
      kodePenjualanStoksCount = increment.toLocaleString("en-US", {
        minimumIntegerDigits: 5,
        useGrouping: false,
      });
    }

    res.json(kodePenjualanStoksCount);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getPenjualanStokById = async (req, res) => {
  try {
    const penjualanStok = await PenjualanStok.findById(req.params.id);
    res.json(penjualanStok);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const savePenjualanStok = async (req, res) => {
  const penjualanStok = new PenjualanStok(req.body);
  try {
    const insertedPenjualanStok = await penjualanStok.save();
    // Status 201 = Created
    res.status(201).json(insertedPenjualanStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updatePenjualanStok = async (req, res) => {
  try {
    const updatedPenjualanStok = await PenjualanStok.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedPenjualanStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deletePenjualanStok = async (req, res) => {
  try {
    const deletedPenjualanStok = await PenjualanStok.deleteOne({
      _id: req.params.id,
    });
    // Status 200 = Successful
    res.status(200).json(deletedPenjualanStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
