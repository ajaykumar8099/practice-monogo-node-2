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
    res.status(201).json({ msg: "User Registerd Successfully", user });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Innternal Server Error", err: err.message });
  }
};

module.exports = { SignUp };
