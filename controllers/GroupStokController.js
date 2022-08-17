import GroupStok from "../models/GroupStokModel.js";

export const getGroupStoks = async (req, res) => {
  try {
    const groupStoks = await GroupStok.find();
    res.json(groupStoks);
  } catch (error) {
    // Error 500 = Kesalahan di server
    res.status(500).json({ message: error.message });
  }
};

export const getGroupStokById = async (req, res) => {
  try {
    const groupStok = await GroupStok.findById(req.params.id);
    res.json(groupStok);
  } catch (error) {
    // Error 404 = Not Found
    res.status(404).json({ message: error.message });
  }
};

export const saveGroupStok = async (req, res) => {
  const groupStok = new GroupStok(req.body);
  try {
    const insertedGroupStok = await groupStok.save();
    // Status 201 = Created
    res.status(201).json(insertedGroupStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const updateGroupStok = async (req, res) => {
  try {
    const updatedGroupStok = await GroupStok.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // Status 200 = Successful
    res.status(200).json(updatedGroupStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

export const deleteGroupStok = async (req, res) => {
  try {
    const deletedGroupStok = await GroupStok.deleteOne({ _id: req.params.id });
    // Status 200 = Successful
    res.status(200).json(deletedGroupStok);
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};
