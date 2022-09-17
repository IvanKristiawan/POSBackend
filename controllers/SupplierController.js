const Supplier = require("../models/SupplierModel.js");

const getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getSuppliersNextLength = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    const suppliersLength = suppliers.length;
    let kodeSupplierCount;
    let increment;

    if (suppliersLength < 1) {
      kodeSupplierCount = (1).toLocaleString("en-US", {
        minimumIntegerDigits: 5,
        useGrouping: false,
      });
    } else {
      increment = suppliersLength + 1;
      kodeSupplierCount = increment.toLocaleString("en-US", {
        minimumIntegerDigits: 5,
        useGrouping: false,
      });
    }

    res.json(kodeSupplierCount);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getSupplierForTable = async (req, res) => {
  try {
    const suppliers = await Supplier.find(
      {},
      { _id: 1, kodeSupplier: 1, namaSupplier: 1, alamatSupplier: 1, kota: 1 }
    );
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getSupplierMainInfo = async (req, res) => {
  try {
    const suppliers = await Supplier.find(
      {},
      { _id: 1, kodeSupplier: 1, namaSupplier: 1 }
    );
    res.json(suppliers);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

const getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.json(supplier);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

const saveSupplier = async (req, res) => {
  const suppliers = await Supplier.find();
  const suppliersLength = suppliers.length;
  let kodeSupplierCount;
  let increment;

  if (suppliersLength < 1) {
    kodeSupplierCount = (1).toLocaleString("en-US", {
      minimumIntegerDigits: 5,
      useGrouping: false,
    });
  } else {
    increment = suppliersLength + 1;
    kodeSupplierCount = increment.toLocaleString("en-US", {
      minimumIntegerDigits: 5,
      useGrouping: false,
    });
  }

  const supplier = new Supplier({
    kodeSupplier: kodeSupplierCount,
    ...req.body,
  });
  try {
    const insertedSupplier = await supplier.save();
    // Status 201 = Created
    res.status(201).json(insertedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const updateSupplier = async (req, res) => {
  try {
    const updatedSupplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const deleteSupplier = async (req, res) => {
  try {
    const deletedSupplier = await Supplier.deleteOne({ _id: req.params.id });
    // Status 200 = Successful
    res.status(200).json(deletedSupplier);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getSuppliers,
  getSuppliersNextLength,
  getSupplierForTable,
  getSupplierMainInfo,
  getSupplierById,
  saveSupplier,
  updateSupplier,
  deleteSupplier,
};
