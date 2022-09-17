const User = require("../models/UserModel.js");
const bcrypt = require("bcryptjs");
const { createError } = require("../utils/error.js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      password: hash,
      tipeUser: req.body.tipeUser,
      kodeNota: req.body.kodeNota,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found!"));

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong Password or Username!"));

    const token = jwt.sign({ id: user._id }, process.env.JWT, {
      expiresIn: "15d",
    });

    const { password, ...otherDetails } = user._doc;

    res.status(200).json({ details: { ...otherDetails, token } });
  } catch (error) {
    // Error 400 = Kesalahan dari sisi user
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
};
