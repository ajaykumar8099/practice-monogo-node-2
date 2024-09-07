const User = require("../models/user");

const SignUp = async (req, res) => {
  try {
    const { name, email, password, contactNumber } = req.body;
    const user = new User({
      name,
      email,
      password,
      contactNumber,
    });
    await user.save();
    res.status(201).json({ msg: "User Registerd", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Innternal Server Error", err: err.message });
  }
};

const SignIn = async (req, res) => {
  try {
    const { name, email } = req.body;
    console.log(email)
    const doesExits = await User.findOne({ email });
    console.log(doesExits)
    if (!doesExits) {
      return res.status(401).json({ msg: "user not found" });
    }
    res.status(201).json({ msg: "user found" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error", err: err.message });
  }
};

module.exports = { SignUp, SignIn };
